import { FC } from "react";
import JobSearchForm from "./JobSearchForm";
import JobVacancy from "./JobVacancy";

const Vacancies: FC = () => {
  return (
    <div className="w-screen h-min p-10 grid grid-cols-[1fr_3fr] sm:grid-cols-1 sm:grid-rows-2 justify-items-center bg-products-bg bg-no-repeat bg-center bg-cover ">
      <JobSearchForm />
      <JobVacancy />
    </div>
  );
};

export default Vacancies;
