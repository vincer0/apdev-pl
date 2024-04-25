import React from "react";

interface IProps {
  children: React.ReactNode;
}
export default function Main({ children }: IProps) {
  return (
    <main className="p-4 sm:p-24 max-w-screen-xl mx-auto">
      <>{children}</>
    </main>
  );
}
