import React from "react";

type Props = {
  label: string;
};

const SimpleHeading = ({ label }: Props) => {
  return (
    <p className="inline-block relative simple-heading text-3xl mb-8">
      {label}
    </p>
  );
};

export default SimpleHeading;
