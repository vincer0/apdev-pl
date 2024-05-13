import React from "react";
import {
  Docker,
  Javascript,
  NextJS,
  React as ReactIcon,
  Symfony,
  Unreal,
  CPlusPlus,
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
  unreal: <Unreal />,
  cplusplus: <CPlusPlus />,
};

const TechIconSolver = ({ iconKey, techName }: Props) => {
  return <div title={techName}>{IconsDictionary[iconKey]}</div>;
};

export default TechIconSolver;
