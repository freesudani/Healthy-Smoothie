import React, { FC, useState } from "react";
import JobSearchForm from "./JobSearchForm";
import { data } from "../data/JobVacancies";
import { JobsProps } from "../models/types.types";
import JobVacancy from "./JobVacancy";

const Vacancies: FC = () => {
  const [jobs, setJobs] = useState<JobsProps[]>(data);

  return (
    <div className="w-screen h-min p-10 grid grid-cols-[1fr_3fr] sm:grid-cols-1 sm:grid-rows-2 justify-items-center bg-products-bg bg-no-repeat bg-center bg-cover ">
      <JobSearchForm OnJobs={setJobs} />
      <JobVacancy jobs={jobs} />
    </div>
  );
};

export default Vacancies;
