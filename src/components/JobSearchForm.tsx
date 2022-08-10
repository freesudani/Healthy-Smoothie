import { FC } from "react";

const JobSearchForm: FC = () => {
  return (
    <form className="w-4/5 h-min bg-gray-400 rounded-lg p-5 shadow-lg shadow-neutral-900">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg font-bold mb-2"
          htmlFor="Title-Search"
        >
          Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="Title-Search"
          type="text"
          placeholder="Title"
        />
      </div>
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg font-bold mb-2"
          htmlFor="Location-Search"
        >
          Location
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="Location-Search"
          type="text"
          placeholder="Location"
        />
      </div>
      <div className="relative px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg font-bold mb-2"
          htmlFor="Job-Type"
        >
          Job Type
        </label>
        <select
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="Job-Type"
        >
          <option value="">None</option>
          <option value="PartTime">Part Time</option>
          <option value="FullTime">Full Time</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 top-[50%] flex items-center justify-center text-gray-700">
          <svg
            className="fill-current h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pt-3">
        <button className="smbt primarybt uppercase">filter</button>
        <button className="smbt secondarybt uppercase">reset</button>
      </div>
    </form>
  );
};

export default JobSearchForm;
