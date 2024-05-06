import React from "react";

interface IProps {
  icon: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}
export default function ExternalLink({
  icon,
  href,
  className,
  onClick,
  ariaLabel = "",
}: IProps) {
  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
}
