import React from "react";

interface IProps {
  icon: React.ReactNode;
  href: string;
}
export default function ExternalLink({ icon, href }: IProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}
