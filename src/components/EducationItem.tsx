
import React from 'react'

type Props = {
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

export const EducationItem = ({ degree, institution, location, period, description }: Props) => {
  return (
    <div className="space-y-2 relative pl-6 border-l-2 border-primary/30 pb-2 ">
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h3 className="text-lg font-semibold">{degree}</h3>
          <p className="text-primary font-medium">
            {institution} - {location}
          </p>
        </div>
        <p className="text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">{period}</p>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
