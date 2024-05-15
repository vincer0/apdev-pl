import React from "react";
import {
  Docker,
  Javascript,
  NextJS,
  React as ReactIcon,
  Symfony,
  Unreal,
  CPlusPlus,
  VueJs,
  Figma,
  Typescript,
  Gatsby,
  Php,
  Laravel,
  Java,
  Spring,
  Maven,
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
  vuejs: <VueJs />,
  figma: <Figma />,
  typescript: <Typescript />,
  gatsby: <Gatsby />,
  php: <Php />,
  laravel: <Laravel />,
  java: <Java />,
  spring: <Spring />,
  maven: <Maven />,
};

const TechIconSolver = ({ iconKey, techName }: Props) => {
  return IconsDictionary[iconKey] ? (
    <div title={techName}>{IconsDictionary[iconKey]}</div>
  ) : null;
};

export default TechIconSolver;
