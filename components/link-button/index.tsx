import React, { ReactFragment } from "react";
import Link from "next/link";
import { Chevron } from "../icons";

type IconType = {
  id: number;
  element: () => React.ReactElement;
};

interface IProps {
  href: string;
  label: string;
  className?: string;
  icon?: Array<IconType> | (() => React.ReactElement);
}

export default function LinkButton({
  href,
  label,
  className,
  icon: Icon,
}: IProps) {
  return (
    <Link href={href} className={className}>
      <button className="bouncy-link w-full apd-menu-item flex flex-col items-center gap-4">
        {Array.isArray(Icon) ? (
          <div className="flex gap-4 justify-center">
            {Icon.map(({ id, element: Icon }) => (
              <Icon key={id} />
            ))}
          </div>
        ) : (
          Icon && <Icon />
        )}
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl uppercase">{label}</span>
          <Chevron />
        </div>
      </button>
    </Link>
  );
}
