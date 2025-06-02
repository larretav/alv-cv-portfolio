'use client';
import { cn } from "@/utils";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
  onValueChange?: (value: string) => void;
  classNames?: {
    base?: string;
    label?: string;
  };
} & InputHTMLAttributes<HTMLInputElement>



export const CustomInput = forwardRef<HTMLInputElement, Props>(({ label, onValueChange, classNames, ...props }, ref) => {


  return (
    <>
      <div className={cn("flex items-center gap-2", classNames?.base)}>
        {label && <p className={cn("shrink min-w-fit", classNames?.label)}>{label}</p>}
        <input
          ref={ref}
          {...props}
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          type="text"
          className={cn(
            "w-full bg-transparent transition-all duration-200 outline-none ",
            "border-1 border-transparent border-b-content1-foreground border-b-1 px-1",
            "focus:border-blue-500 hover:border-blue-500 active:border-blue-500 focus:rounded-md",
            props.className
          )}
        />
      </div>
    </>

  );
});

CustomInput.displayName = "CustomInput";