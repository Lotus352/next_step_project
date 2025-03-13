import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "@/api/axios-client.ts";
import FeaturedIndustryType from "@/types/featured-industry-type.ts";

interface IndustriesState {
  industries: FeaturedIndustryType[];
  status: "idle" | "loading" | "failed";
}

const initialState: IndustriesState = {
  industries: [],
  status: "idle",
};

export const fetchFeaturedIndustries = createAsyncThunk<
  FeaturedIndustryType[],
  number
>("industries/fetchIndustries", async (size: number) => {
  const response = await axiosClient.get(
    "/industries/get-featured-industries",
    {
      params: { size },
    },
  );
  return response.data;
});

const industriesSlice = createSlice({
  name: "industries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetchFeaturedIndustries
      .addCase(fetchFeaturedIndustries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedIndustries.fulfilled, (state, action) => {
        state.status = "idle";
        state.industries = action.payload;
      })
      .addCase(fetchFeaturedIndustries.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default industriesSlice.reducer;
