import React from "react";
import Link from "next/link";
import { Chevron } from "../icons";

interface IProps {
  href: string;
  label: string;
}

export default function LinkButton({ href, label }: IProps) {
  return (
    <Link href={href}>
      <button className="bouncy-link">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl uppercase">{label}</span>
          <Chevron />
        </div>
      </button>
    </Link>
  );
}
