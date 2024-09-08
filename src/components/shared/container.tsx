import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-full max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
