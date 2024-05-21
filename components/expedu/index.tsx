"use client";

import clsx from "clsx";
import React from "react";
import SimpleHeading from "../simple-heading";
import TechIconSolver from "./timeline/tech-icon-solver";

// TODO make trival api
import { timelineMock } from "../../mocks";

// TODO split into smaller components
// TODO add filtering for EDU and EXP
// TODO get rid of undefined properties
// TODO if someone uchecks all filters - show -> "Without experience and education you will achieve nothing" ~Adam
// TODO better semantic
const ExpEdu = () => {
  return (
    <section id="expedu" className="py-12">
      <SimpleHeading label="Experience and Education" />
      <p className="text-center">
        Use filters to better show you what interests you most:
      </p>
      <div className="flex justify-center align-center gap-8">
        <label htmlFor="exp">
          <input
            type="checkbox"
            id="exp"
            name="exp"
            value="exp"
            onChange={() => {}}
            className="mr-2"
          />
          Experience
        </label>
        <label htmlFor="edu">
          <input
            type="checkbox"
            id="edu"
            name="edu"
            value="edu"
            onChange={() => {}}
            checked
            className="mr-2"
          />
          Education
        </label>
      </div>
      <div className="timeline">
        {timelineMock.map((checkpoint, index) => (
          <div className="timeline-item-wrapper" key={checkpoint.id}>
            <div className={clsx("timeline-item", index % 2 === 0 && "left")}>
              <div className="timeline-item-connector">
                <div className="dot" />
                <div className="line" />
              </div>
              <div className="timeline-item-details">
                {checkpoint.techs && checkpoint.techs.length && (
                  <div className="timeline-details-techs">
                    {checkpoint.techs.map((tech, index) => (
                      <TechIconSolver
                        key={index}
                        iconKey={tech.key}
                        techName={tech.name}
                      />
                    ))}
                  </div>
                )}
                <div className="timeline-details-position">
                  {checkpoint.position}
                </div>
                <div className="timeline-details-date">
                  {`${checkpoint.date.from} - ${checkpoint.date.to}`}
                </div>
                <div className="timeline-details-entity">
                  {checkpoint.entity}
                </div>
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
