import { FC } from "react";

const Choose: FC = () => {
  return (
    <div className="w-screen h-[45rem] bg-white relative px-44 lg:px-20">
      <div className="flex justify-center items-start sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-96 h-[50rem] lg:h-[47rem]"
          viewBox="0 0 356 560"
        >
          <desc>Created with Fabric.js 1.7.22</desc>
          <defs></defs>
          <g transform="translate(128 128) scale(0.7 2)" className="">
            <g
              className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
              transform="translate(-175.05 -175.05000000000004) scale(4.89 3.89)"
            >
              <path
                d="M 89.357 64.205 l -7.998 -4.618 l -7.998 -4.618 c -0.857 -0.495 -1.928 0.124 -1.928 1.113 v 5.82 c -13.067 -1.598 -23.222 -12.756 -23.222 -26.247 v -20.25 c 0 -0.688 -0.558 -1.246 -1.246 -1.246 h -3.931 c -0.688 0 -1.246 0.558 -1.246 1.246 v 20.25 c 0 13.491 -10.156 24.648 -23.222 26.247 v -5.82 c 0 -0.989 -1.071 -1.608 -1.928 -1.113 l -7.998 4.618 l -7.998 4.618 c -0.857 0.495 -0.857 1.731 0 2.226 l 7.998 4.618 l 7.998 4.618 c 0.857 0.495 1.928 -0.124 1.928 -1.113 v -6.184 C 30.24 67.225 40.142 59.952 45 49.817 c 4.858 10.135 14.76 17.408 26.434 18.551 v 6.184 c 0 0.989 1.071 1.608 1.928 1.113 l 7.998 -4.618 l 7.998 -4.618 C 90.214 65.936 90.214 64.699 89.357 64.205 z"
                className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(84, 158, 107); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
                fill="#549e6b"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute top-96 right-72 lg:right-40 lg:top-80 md:right-10 md:top-72 ph:top-20 ph:right-52 mb:right-32  flex flex-col items-center animate-pulse hover:animate-none">
        <h3 className="text-4xl text-primary-200 text-center">Find your</h3>
        <h2 className="text-5xl text-primary-200 font-semibold text-center my-3">
          Healthy-Smoothie
        </h2>
        <h3 className="text-4xl text-primary-200 text-center">Location</h3>
        <div className="mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-primary-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="absolute top-96 left-72 lg:left-40 lg:top-80 md:left-10 md:top-72 ph:top-96 ph:left-52 mb:left-32 flex flex-col items-center animate-pulse hover:animate-none">
        <h3 className="text-4xl text-primary-200 text-center">
          Phone Orders ?
        </h3>
        <h2 className="text-5xl text-primary-200 text-center my-3">
          In A Rush ?
        </h2>
        <h3 className="text-4xl text-primary-200 text-center">
          We take phone Orders
        </h3>
        <div className=" mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-primary-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Choose;
