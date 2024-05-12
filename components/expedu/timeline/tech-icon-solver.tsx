import React from "react";
import {
  Docker,
  Javascript,
  NextJS,
  React as ReactIcon,
  Symfony,
} from "@/components/icons";

type Props = {
  iconKey: string;
  techName: string;
};

const IconsDictionary: Dictionary<string, React.ReactElement> = {
  docker: <Docker />,
  javascript: <Javascript />,
  nextjs: <NextJS />,
  react: <ReactIcon />,
  symfony: <Symfony />,
};

const TechIconSolver = ({ iconKey, techName }: Props) => {
  return <div title={techName}>{IconsDictionary[iconKey]}</div>;
};

export default TechIconSolver;
