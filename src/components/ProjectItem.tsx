import { Badge } from '@heroui/badge';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Image } from '@heroui/image';
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
            <Chip
              key={item + idx}
              startContent={ <Image width={16} height={16} src={`https://cdn.simpleicons.org/${item.replaceAll(' ','').toLowerCase()}/11181c/ecedee`} className="text-red" /> }
              variant="bordered"
            >{item}</Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
