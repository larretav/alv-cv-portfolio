import clsx from 'clsx'
import React from 'react'

type Props = {
  text: string;
  className?: string;
};

export const SectionTitle = ({ text, className }: Props) => {
  return (
    <h2
      className={clsx(
        "text-xl font-semibold mb-3 border-b border-primary-foreground/20 pb-2",
        className
      )}
    >
      {text}
    </h2>
  );
}
