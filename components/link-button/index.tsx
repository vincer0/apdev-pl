import React from "react";
import Link from "next/link";
import { Chevron } from "../icons";

type Props = {
  href: string;
  label: string;
  className?: string;
  icon?: Array<IconType> | ((props: IconProps) => React.ReactElement);
};

export default function LinkButton({
  href,
  label,
  className,
  icon: Icon,
}: Props) {
  return (
    <Link href={href} className={className}>
      <div className="bouncy-link w-full apd-menu-item flex flex-col items-center gap-2 md:gap-4 p-4">
        {Array.isArray(Icon) ? (
          <div className="flex gap-4 justify-center">
            {Icon.map(({ id, element: Icon }) => (
              <Icon key={id} className="h-8 md:h-24" />
            ))}
          </div>
        ) : (
          Icon && <Icon className="h-8 md:h-24" />
        )}
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm md:text-2xl uppercase text-center">
            {label}
          </span>
          <Chevron className="hidden md:block" />
        </div>
      </div>
    </Link>
  );
}
