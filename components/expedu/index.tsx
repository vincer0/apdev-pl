"use client";

import clsx from "clsx";
import React, { ChangeEvent, useMemo, useState } from "react";
import SimpleHeading from "../simple-heading";
import TechIconSolver from "./timeline/tech-icon-solver";

// TODO
import filterTimeline from "@/utils/filterTimeline";

// TODO make trival api
import { timelineMock } from "../../mocks";

// TODO split into smaller components
// TODO get rid of undefined properties
// TODO if someone uchecks all filters - show -> "Without experience and education you will achieve nothing" ~Adam
// TODO better semantic
// TODO filtering component - loop through
const ExpEdu = () => {
  const [checkboxes, setCheckboxes] = useState(["exp", "edu"]);
  const filtered = useMemo(
    () => filterTimeline(checkboxes, timelineMock),
    [checkboxes]
  );
  const handleCheckboxCheck = ({
    target: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  return (
    <section id="expedu" className="py-12">
      <SimpleHeading label="Experience and Education" />
      <p className="text-xl text-center">
        Use filters to better show you what interests you most:
      </p>
      <div className="flex justify-center gap-8 mt-4 mb-8">
        <label htmlFor="exp" className="flex items-center">
          <input
            type="checkbox"
            id="exp"
            name="exp"
            value="exp"
            onChange={handleCheckboxCheck}
            className="w-[20px] h-[20px] mr-2"
            checked={checkboxes.includes("exp")}
          />
          <span className="text-lg md:text-xl">Experience</span>
        </label>
        <label htmlFor="edu">
          <input
            type="checkbox"
            id="edu"
            name="edu"
            value="edu"
            onChange={handleCheckboxCheck}
            className="mr-2"
            checked={checkboxes.includes("edu")}
          />
          <span className="text-lg md:text-xl">Education</span>
        </label>
      </div>
      {checkboxes.length > 0 ? (
        <div className="timeline">
          {filtered.map((checkpoint: any, index: any) => (
            <div className="timeline-item-wrapper" key={checkpoint.id}>
              <div className={clsx("timeline-item", index % 2 === 0 && "left")}>
                <div className="timeline-item-connector">
                  <div className="dot" />
                  <div className="line" />
                </div>
                <div className="timeline-item-details">
                  {checkpoint.techs && checkpoint.techs.length && (
                    <div className="timeline-details-techs">
                      {checkpoint.techs.map((tech: any, index: number) => (
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
      ) : (
        <p className="p-2 text-center md:text-xl">{`"Achieving success is almost impossible without both experience and self-development."`}</p>
      )}
    </section>
  );
};

export default ExpEdu;
