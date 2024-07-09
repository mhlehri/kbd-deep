import { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-7xl xl:px-0 px-2 sm:px-3 ${className}`}>
      {children}
    </div>
  );
}
