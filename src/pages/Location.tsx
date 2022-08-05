import React, { FC } from "react";
import FindUs from "../components/FindUs";
import Choose from "../components/Choose";
import Stores from "../components/Stores";
import HeadQr from "../components/HeadQr";

const Location: FC = () => {
  return (
    <div>
      <FindUs />
      <Choose />
      <Stores />
      <HeadQr />
    </div>
  );
};

export default Location;
