import React from 'react'

type Props = {
  text: string;
  icon?: React.ReactNode
}

export const SectionTitle2 = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center mb-4 ">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-primary dark:text-foreground/80 size-6">{icon}</span>
        {text}
      </h2>
      <div className="ml-4 h-0.5 flex-grow bg-primary/20 dark:bg-foreground/20 rounded-full"></div>
    </div>
  );
}
