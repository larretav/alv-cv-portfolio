import React from 'react'

type Props = {
  text: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SectionTitle2 = ({ text, icon: Icon }: Props) => {
  return (
    <h2 className="text-2xl font-bold flex items-center gap-2">
      {Icon && <Icon className="size-6 text-primary dark:text-foreground" />}
      {text}
    </h2>
  )
}
