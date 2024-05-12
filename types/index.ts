type IconType = {
  id: number;
  element: (props: IconProps) => React.ReactElement;
};

type IconProps = {
  //height: string;
  //width: string;
  className?: string;
};

type Dictionary<Key extends keyof any, Value> = {
  [key in Key]: Value;
};
