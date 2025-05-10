'use client';

import { Rating } from '@/components';
import { useState } from 'react';

import { HeartIcon as HeartFilled } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

export const RatingTest = () => {
  const [value, setValue] = useState(2.5);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Calificación: {value}</h2>
      <Rating
        value={value}
        onChange={setValue}
        precision={0.5}
        icon={HeartFilled}
        emptyIcon={HeartOutline}
        size="lg"
      />
    </div>
  );
}

