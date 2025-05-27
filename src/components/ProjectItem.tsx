import { Badge } from '@heroui/badge';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import React from 'react'

type Props = {
  name: string;
  description: string;
  image?: string;
  technologies: string[];
};

export const ProjectItem = ({ name, description, technologies, image }: Props) => {
  return (
    <Card shadow="none" className="border border-foreground-400  bg-transparent">
      <CardBody className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-foreground mt-1">
          {description}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {technologies.map((item, idx) => (
            <Chip key={item + idx} variant="bordered">{item}</Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
