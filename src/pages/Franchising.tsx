import React, { FC } from "react";
import FranchiseApplication from "../components/FranchiseApplication";
import FranchiseHeading from "../components/FranchiseHeading";
import FranchiseTraining from "../components/FranchiseTraining";
import Steps from "../components/Steps";

const Franchising: FC = () => {
  return (
    <div>
      <FranchiseHeading />
      <Steps />
      <FranchiseApplication />
      <FranchiseTraining />
    </div>
  );
};

export default Franchising;
