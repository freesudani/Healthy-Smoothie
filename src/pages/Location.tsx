import React, { FC } from "react";
import FindUs from "../components/FindUs";
import Choose from "../components/Choose";
import Stores from "../components/Stores";

const Location: FC = () => {
  return (
    <div>
      <FindUs />
      <Choose />
      <Stores />
    </div>
  );
};

export default Location;
