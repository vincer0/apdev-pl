import React from "react";

type Props = {
  label: string;
};

const SimpleHeading = ({ label }: Props) => {
  return (
    <h3 className="inline-block relative simple-heading text-3xl mb-8">
      {label}
    </h3>
  );
};

export default SimpleHeading;
