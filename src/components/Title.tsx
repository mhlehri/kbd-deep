import React from "react";
import { cn } from "../lib/utils";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "flex items-center gap-2 text-3xl text-balance font-medium",
        className
      )}
    >
      {children}
    </h1>
  );
}
