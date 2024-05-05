type IconType = {
  id: number;
  element: (props: IconProps) => React.ReactElement;
};

type IconProps = {
  //height: string;
  //width: string;
  className?: string;
};
