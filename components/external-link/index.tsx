import React from "react";

interface IProps {
  icon: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}
export default function ExternalLink({
  icon,
  href,
  className,
  onClick,
}: IProps) {
  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}
