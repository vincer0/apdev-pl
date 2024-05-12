import clsx from "clsx";
import React from "react";
import SimpleHeading from "../simple-heading";

import { timelineMock } from "../../mocks";

const ExpEdu = () => {
  return (
    <section id="expedu" className="pb-8">
      <SimpleHeading label="Experience and Education" />
      <div className="timeline">
        {timelineMock.map((checkpoint, index) => )}
      </div>
    </section>
  );
};

export default ExpEdu;
