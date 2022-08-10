import { FC, useRef } from "react";
import OrangeJuiceImage from "../images/tangerine-newt-hINQgaTqg7Q-unsplash (1)_prev_ui.png";

const FranchiseApplication: FC = () => {
  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const lastnameInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const stateInputRef = useRef<HTMLSelectElement>(null);
  const zipInputRef = useRef<HTMLInputElement>(null);
  const networthInputRef = useRef<HTMLSelectElement>(null);
  const liqcapInputRef = useRef<HTMLSelectElement>(null);
  const hearaboutusInputRef = useRef<HTMLSelectElement>(null);
  const tellaboutusInputRef = useRef<HTMLInputElement>(null);
  const cancontactInputRef = useRef<HTMLInputElement>(null);

  const FranchiseHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredFirstName = firstnameInputRef.current?.value;
    const enteredLastName = lastnameInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
    const enteredState = stateInputRef.current?.value;
    const enteredZip = zipInputRef.current?.value;
    const enteredNetworth = networthInputRef.current?.value;
    const enteredLiqCap = liqcapInputRef.current?.value;
    const enteredHearAbout = hearaboutusInputRef.current?.value;
    const enteredTellAbout = tellaboutusInputRef.current?.value;
    const eneterdCanContact = cancontactInputRef.current?.value;
  };

  return (
    <div className="w-screen h-min p-10  grid grid-cols-[600px_2fr] md:grid-cols-1 bg-products-bg bg-no-repeat bg-center bg-cover ">
      <div className="w-full h-full rotate-[20deg] md:hidden">
        <img src={OrangeJuiceImage} alt="OrangeJuice" className="w-[55rem]" />
      </div>
      <div className="w-full">
        <div className="text-center my-5">
          <h3 className="text-white text-3xl ph:text-2xl mb:text-xl uppercase">
            CONTACT HEALTHY-SMOOTHIE TODAY
          </h3>
        </div>
        <div className="text-center my-6">
          <h1 className="text-white text-6xl ph:text-5xl mb:text-4xl font-bold">
            Ready to start a conversation <br /> about your{" "}
            <span className="text-secondary-200 capitalize">
              healthy smoothie{" "}
            </span>
            <br />
            franchise?
          </h1>
        </div>
        <form className="w-full" onSubmit={FranchiseHandler}>
          <div className="flex justify-start w-full mb-4">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                ref={firstnameInputRef}
              />
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                ref={lastnameInputRef}
              />
            </div>
          </div>

          <div className="flex justify-start w-full mb-4">
            <div className="w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                ref={cityInputRef}
              />
            </div>
            <div className="w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-state"
                  ref={stateInputRef}
                >
                  <option value="new-mexico">New Mexico</option>
                  <option value="missouri">Missouri</option>
                  <option value="texas">Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-zip"
                type="text"
                placeholder="90210"
                ref={zipInputRef}
              />
            </div>
          </div>
          <div className="flex justify-start w-full mb-4 p-3">
            <body className="block uppercase tracking-wide text-gray-700 text-lg mb:text-base font-bold">
              Let's talk financials! Our Healthy-Smoothie Financial Requirements
              are a minimum net worth of 350k
              <br /> and 150k of that in liquid capital.
            </body>
          </div>
          <div className="flex justify-start w-full mb-4">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-state"
              >
                Net Worth
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  ref={networthInputRef}
                >
                  <option value="1">Less Than $350,000</option>
                  <option value="2">$350,000 to $1,000,000</option>
                  <option value="3">over $1,000,000</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
                htmlFor="grid-state"
              >
                Liquid Capital
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  ref={liqcapInputRef}
                >
                  <option value="1">Less Than $150,000</option>
                  <option value="2">$150,000 to $500,000</option>
                  <option value="3">over $500,000</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
              htmlFor="grid-source"
            >
              How Did You Hear About Us ?
            </label>
            <div className="relative ">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-source"
                ref={hearaboutusInputRef}
              >
                <option value="1">Website</option>
                <option value="2">Social Media</option>
                <option value="3">Referral</option>
                <option value="4">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold mb-2"
              htmlFor="grid-tellus"
            >
              TELL US ABOUT YOU
            </label>
            <input
              id="grid-tellus"
              type="text"
              ref={tellaboutusInputRef}
              className="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="form-check px-3">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              ref={cancontactInputRef}
            />
            <label
              className="block uppercase tracking-wide text-gray-700 text-xl mb:text-lg  font-bold my-5"
              htmlFor="flexCheckDefault"
            >
              Healthy-Smoothie can contact me via text message.
            </label>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="lgbt secondarybt ph:mdbt" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FranchiseApplication;
