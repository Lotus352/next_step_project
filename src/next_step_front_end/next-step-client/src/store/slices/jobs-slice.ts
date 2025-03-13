import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "@/api/axios-client";
import FeaturedJobType from "@/types/featured-job-type.ts";
import jobDetail from "@/types/job-detail-type.ts";
import JobType from "@/types/job-type.ts";

interface PaginatedJobs {
  content: JobType[];
  totalPages: number;
  number: number;
  size: number;
  totalElements: number;
}

interface JobsState {
  jobs: JobType[];
  featuredJobs: FeaturedJobType[];
  selectedJob: jobDetail | null;
  status: "idle" | "loading" | "failed";
}

const initialState: JobsState = {
  jobs: [],
  featuredJobs: [],
  selectedJob: null,
  status: "idle",
};

export const getAllJobs = createAsyncThunk<
  PaginatedJobs,
  { page: number; size: number }
>("jobs/getAllJobs", async ({ page, size }) => {
  const response = await axiosClient.get(`/jobs`, { params: { page, size } });
  return response.data;
});

export const fetchFeaturedJobs = createAsyncThunk<FeaturedJobType[], string>(
  "jobs/fetchFeaturedJobs",
  async (filter) => {
    const response = await axiosClient.get("/jobs/get-featured-jobs", {
      params: { filter },
    });
    return response.data;
  },
);

export const fetchJobById = createAsyncThunk<jobDetail, string>(
  "jobs/fetchJobById",
  async (jobId) => {
    const response = await axiosClient.get(`/jobs/${jobId}`);
    return response.data;
  },
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },
    clearJobs: (state) => {
      state.jobs = [];
      state.featuredJobs = [];
      state.selectedJob = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllJobs
      .addCase(getAllJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobs = action.payload.content;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.status = "failed";
      })

      // fetchFeaturedJobs
      .addCase(fetchFeaturedJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedJobs.fulfilled, (state, action) => {
        state.status = "idle";
        state.featuredJobs = action.payload;
      })
      .addCase(fetchFeaturedJobs.rejected, (state) => {
        state.status = "failed";
      })

      // fetchJobById
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedJob = action.payload;
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.status = "failed";
        state.selectedJob = null;
      });
  },
});

export default jobsSlice.reducer;
export const { clearSelectedJob } = jobsSlice.actions;
