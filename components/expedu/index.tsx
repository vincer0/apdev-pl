import clsx from "clsx";
import React from "react";
import SimpleHeading from "../simple-heading";
import TechIconSolver from "./timeline/tech-icon-solver";

// TODO make trival api
import { timelineMock } from "../../mocks";

// TODO split into smaller components
// TODO add filtering for EDU and EXP
// TODO get rid of undefined properties
const ExpEdu = () => {
  return (
    <section id="expedu" className="pb-8">
      <SimpleHeading label="Experience and Education" />
      <div className="timeline">
        {timelineMock.map((checkpoint, index) => (
          <div className="timeline-item-wrapper" key={checkpoint.id}>
            <div className={clsx("timeline-item", index % 2 === 0 && "left")}>
              <div className="timeline-item-connector">
                <div className="dot" />
                <div className="line" />
              </div>
              <div className="timeline-item-details">
                {checkpoint.type === "exp" && (
                  <div className="techs">
                    {checkpoint.techs &&
                      checkpoint.techs.length &&
                      checkpoint.techs.map((tech, index) => (
                        <TechIconSolver
                          key={index}
                          iconKey={tech.key}
                          techName={tech.name}
                        />
                      ))}
                  </div>
                )}
                <small className="timeline-details-date">
                  {`${checkpoint.date.from} - ${checkpoint.date.to}`}
                </small>
                <div className="timeline-details-title">
                  {checkpoint.entity}
                </div>
                {checkpoint.type === "exp" && (
                  <div className="timeline-details-title">
                    {checkpoint.position}
                  </div>
                )}
                <div className="timeline-details-description">
                  {checkpoint.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpEdu;
