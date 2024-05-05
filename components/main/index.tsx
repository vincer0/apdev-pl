import React from "react";

interface IProps {
  children: React.ReactNode;
}
export default function Main({ children }: IProps) {
  return (
    <main className="content-grid content">
      <>{children}</>
    </main>
  );
}
