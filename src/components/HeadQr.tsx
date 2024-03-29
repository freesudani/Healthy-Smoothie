import { FC } from "react";

const HeadQr: FC = () => {
  return (
    <div className="w-screen h-[51rem]  bg-white flex justify-center items-center ">
      <div className="w-[80rem] h-[40rem]  bg-location-bg bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col shadow-lg shadow-neutral-900 ">
        <div className="from-transparent  via-primary-100 to-primary-200 w-full h-full bg-gradient-to-r flex justify-center items-end flex-col">
          <div className="text-white text-right p-20">
            <h1 className="text-6xl mb:text-5xl mb-3">Headquarters</h1>
            <h2 className="text-5xl mb:text-4xl">Address</h2>
            <h6 className="text-2xl mb:text-xl mb-5">
              The Baby Soi 7
              <br /> 556 South 9700 East <br /> American Fork, AT/MT 84521
              <br />
              (Just east of Loco Pizza)
            </h6>
            <h2 className="text-5xl mb:text-4xl">Hours</h2>
            <h6 className="text-2xl mb:text-xl mb-5">
              Monday - Saturday <br /> 10 a.m. - 7:30 p.m.
            </h6>
            <h2 className="text-5xl mb:text-4xl">Phone</h2>
            <h6 className="text-2xl mb:text-xl">(652) 780-0584</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadQr;
