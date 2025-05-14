'use client';

import { Rating } from '@/components';
import { useState } from 'react';

import { StarIcon as StarFilled } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

export const RatingTest = () => {
  const [value, setValue] = useState(2.5);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Calificación: {value}</h2>
      <Rating
        value={value}
        onChange={setValue}
        precision={0.5}
        icon={StarFilled}
        emptyIcon={StarOutline}
        size="lg"
        
      />
    </div>
  );
}

