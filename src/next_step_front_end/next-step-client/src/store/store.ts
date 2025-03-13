import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobs-slice.ts";
import industriesReducer from "./slices/industries-slice.ts";
import companiesReducer from "./slices/companies-slice.ts";
import companyReviewsReducer from "./slices/company-review-slice.ts";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    companies: companiesReducer,
    industries: industriesReducer,
    companyReviews: companyReviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
