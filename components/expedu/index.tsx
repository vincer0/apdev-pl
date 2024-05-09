import React from "react";
import SimpleHeading from "../simple-heading";

import { timelineMock } from "../../mocks";

const ExpEdu = () => {
  return (
    <div id="expedu">
      <SimpleHeading label="Experience and Education" />
      <div className="timeline">
        {timelineMock.map((checkpoint) => (
          <div key={checkpoint.id} className="checkpoint-wrapper">
            <div className="checkpoint-connector">
              <div className="checkpoint-connector-line" />
              <div className="checkpoint-connector-arrow" />
            </div>
            <div className="checkpoint">
              {checkpoint.techs && (
                <div className="techs flex">
                  {checkpoint.techs.map((tech) => (
                    <div className="tech" key={tech.id}>
                      {tech.name}
                    </div>
                  ))}
                </div>
              )}
              <p className="checkpoint-title">{checkpoint.title}</p>
              <p className="checkpoint-date">{`${checkpoint.date.from} - ${checkpoint.date.to}`}</p>
              <p className="checkpoint-description">{checkpoint.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpEdu;
