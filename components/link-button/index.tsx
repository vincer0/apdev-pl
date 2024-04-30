import React from "react";
import Link from "next/link";
import { Chevron } from "../icons";

interface IProps {
  href: string;
  label: string;
  className?: string;
  icons?: Array<React.ReactElement>;
}

export default function LinkButton({ href, label, className, icons }: IProps) {
  return (
    <Link href={href} className={className}>
      <button className="bouncy-link">
        <div className="flex gap-4">{icons && icons.map((icon) => icon)}</div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl uppercase">{label}</span>
          <Chevron />
        </div>
      </button>
    </Link>
  );
}
