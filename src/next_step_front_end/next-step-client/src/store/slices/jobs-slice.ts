import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "@/api/axios-client";
import JobFeature from "@/types/job-feature.ts";
import jobDetail from "@/types/job-detail.ts";

interface JobsState {
  jobs: JobFeature[];
  status: "idle" | "loading" | "failed";
  selectedJob: jobDetail | null;
}

const initialState: JobsState = {
  jobs: [],
  status: "idle",
  selectedJob: null,
};

export const fetchJobs = createAsyncThunk<JobFeature[], string>(
  "jobs/FetchJobs",
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
  },
  extraReducers: (builder) => {
    builder

    // FetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
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
