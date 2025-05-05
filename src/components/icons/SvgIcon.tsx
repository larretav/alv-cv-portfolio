"use client";
import type { IconSvgProps } from "@/types";

export const SvgIcon = ({ size = 24, width, height, children, viewBox = "0 0 24 24", ...props }: IconSvgProps) => {

  return (
    <svg height={height || size} viewBox={viewBox} width={width || size} {...props} >
      {children}
    </svg>
  );
};
