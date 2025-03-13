import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "@/api/axios-client";
import CompanyReviewType from "@/types/company-review-type.ts";

interface PaginatedReviews {
  content: CompanyReviewType[];
  totalPages: number;
  number: number;
  size: number;
  totalElements: number;
}

interface CompanyReviewsState {
  reviews: CompanyReviewType[];
  totalPages: number;
  page: number;
  totalElements: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CompanyReviewsState = {
  reviews: [],
  totalPages: 0,
  page: 0,
  totalElements: 0,
  status: "idle",
};

export const fetchReviewsByCompanyId = createAsyncThunk<
  PaginatedReviews,
  { companyId: number; page: number; size: number }>(
  "companyReviews/fetchReviewsByCompanyId",
  async ({ companyId, page, size }) => {
    const response = await axiosClient.get(
      `/company-reviews/get-by-company/${companyId}`,
      { params: { page, size } },
    );
    return response.data;
  },
);

const companyReviewsSlice = createSlice({
  name: "companyReviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsByCompanyId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviewsByCompanyId.fulfilled, (state, action) => {
        state.status = "idle";
        state.reviews = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.number;
        state.totalElements = action.payload.totalElements;
      })
      .addCase(fetchReviewsByCompanyId.rejected, (state) => {
        state.status = "failed";
        state.reviews = [];
      });
  },
});

export default companyReviewsSlice.reducer;
