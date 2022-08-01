import React, { FC } from "react";
import Benefits from "../components/Benefits";
import JoinUs from "../components/JoinUs";
import Vacancies from "../components/Vacancies";

const Careers: FC = () => {
  return (
    <div>
      <JoinUs />
      <Benefits />
      <Vacancies />
    </div>
  );
};

export default Careers;
