import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CompanyType from "@/types/company-type.ts";
import axiosClient from "@/api/axios-client.ts";

interface CompaniesState {
  featuredCompanies: CompanyType[];
  selectedCompany: CompanyType | null;
  status: "idle" | "loading" | "failed";
}

const initialState: CompaniesState = {
  featuredCompanies: [],
  selectedCompany: null,
  status: "idle",
};

export const fetchFeaturedCompanies = createAsyncThunk<CompanyType[], number>(
  "companies/fetchFeaturedCompanies",
  async (size) => {
    const response = await axiosClient.get(
      "/companies/get-featured-companies",
      {
        params: { size },
      },
    );
    return response.data;
  },
);

export const fetchCompanyById = createAsyncThunk<CompanyType, number>(
  "companies/fetchCompanyById",
  async (companyId) => {
    const response = await axiosClient.get(`/companies/${companyId}`);
    return response.data;
  },
);

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    clearSelectedCompany: (state) => {
      state.selectedCompany = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // fetchFeaturedCompanies
      .addCase(fetchFeaturedCompanies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedCompanies.fulfilled, (state, action) => {
        state.status = "idle";
        state.featuredCompanies = action.payload;
      })
      .addCase(fetchFeaturedCompanies.rejected, (state) => {
        state.status = "failed";
      })

      // fetchCompanyById
      .addCase(fetchCompanyById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedCompany = action.payload;
      })
      .addCase(fetchCompanyById.rejected, (state) => {
        state.status = "failed";
        state.selectedCompany = null;
      });
  },
});

export default companiesSlice.reducer;
export const { clearSelectedCompany } = companiesSlice.actions;
