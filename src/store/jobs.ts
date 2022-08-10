import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/JobVacancies";
import { JobVacancyProps } from "../models/types.types";

const initialState: JobVacancyProps = { jobs: data };

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state) => {
      state.jobs = data;
    },
  },
});

export const jobActions = jobsSlice.actions;

export default jobsSlice.reducer;
