import { FC } from "react";

const JobAlert: FC = () => {
  return (
    <div className="h-[20rem] w-screen flex flex-col justify-center items-center bg-white">
      <div>
        <h4 className="text-3xl font-bold">Job Alerts</h4>
      </div>
      <div className="text-xl text-center my-2">
        Subscribe and receive new vacancies according to your queries from more
        than 50 job sites.
      </div>
      <form>
        <div className="flex mt-5 mb:flex-col mb:justify-center mb:items-center">
          <input
            className="appearance-none block w-[30rem] bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="Title-Search"
            type="text"
            placeholder="E-mail"
          />
          <button className="smbt primarybt ml-2 mb:mb-4">OK</button>
        </div>
      </form>
      <div>
        <h5 className="italic">You can cancel your Job Alerts anytime.</h5>
      </div>
    </div>
  );
};

export default JobAlert;
