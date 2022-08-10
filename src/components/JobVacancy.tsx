import { FC } from "react";
import { useAppSelector } from "../App";
import { JobsProps } from "../models/types.types";

const JobVacancy: FC = () => {
  const jobs = useAppSelector((state) => state.jobs.jobs);
  return (
    <div>
      {jobs.map((job: JobsProps) => {
        const deadlineDate = job.deadline.toLocaleDateString();
        return (
          <div className="w-4/5  md:w-full h-[10rem] px-5 py-5  my-10 first:mt-0 sm:first:mt-5 z-10 grid grid-cols-[3fr_1fr] grid-rows-2  justify-items-center items-center shadow-lg shadow-neutral-900  bg-primary-100 ">
            <div>
              <h3 className="text-5xl sm:text-4xl text-secondary-200 flex items-center uppercase">
                <span className="text-3xl sm:text-2xl text-white rounded-full bg-blue-700 px-4 mr-4">
                  {job.id}
                </span>
                {job.title}
              </h3>
            </div>
            <div className="row-span-2">
              <button className="lgbt sm:mdbt secondarybt uppercase">
                Apply
              </button>
            </div>
            <div>
              <h5 className="text-2xl sm:text-xl">
                <span className="mx-1">{job.location}</span>
                <span className="text-3xl font-extrabold text-blue-800">/</span>
                <span className="mx-1">
                  {job.fullTime ? "Full Time" : "Part Time"}
                </span>
                <span className="text-3xl font-extrabold text-blue-800">/</span>
                <span className="mx-1">{deadlineDate}</span>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobVacancy;
