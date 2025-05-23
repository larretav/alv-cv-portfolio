type ExperienceItemProps = {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export const ExperienceItem = ({ title, company, location, period, responsibilities }: ExperienceItemProps) => {
  return (
    <div className="space-y-2 relative pl-6 border-l-2 border-primary/30 pb-2 ">
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-primary font-medium">
            {company} - {location}
          </p>
        </div>
        <p className="text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">{period}</p>
      </div>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}
