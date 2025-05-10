'use client';

import { useState, useMemo } from 'react';
import clsx from 'clsx';

type RatingProps = {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
  precision?: number;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  emptyIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export const Rating = ({
  value,
  onChange,
  max = 5,
  readOnly = false,
  precision = 1,
  icon: Icon = () => <svg />,
  emptyIcon: EmptyIcon = Icon,
  size = 'md',
  className,
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const steps = useMemo(() => {
    const count = max / precision;
    return Array.from({ length: count }, (_, i) => +(i * precision).toFixed(2));
  }, [max, precision]);

  const displayValue = hoverValue ?? value;

  const handleClick = (val: number) => {
    if (!readOnly && onChange) onChange(val);
  };

  return (
    <div className={clsx('flex items-center gap-0.5', className)} role="radiogroup" aria-label="Rating">
      {steps.map((stepVal, idx) => {
        const filled = displayValue >= stepVal + precision;
        const partiallyFilled = !filled && displayValue >= stepVal;

        const IconComponent = filled ? Icon : partiallyFilled ? Icon : EmptyIcon;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => handleClick(stepVal + precision)}
            onMouseEnter={() => setHoverValue(stepVal + precision)}
            onMouseLeave={() => setHoverValue(null)}
            disabled={readOnly}
            className={clsx(
              'text-yellow-500 transition-transform hover:scale-110 focus:outline-none',
              sizeClasses[size],
              readOnly && 'cursor-default'
            )}
            aria-label={`${stepVal + precision} rating`}
          >
            <IconComponent
              className={clsx(
                sizeClasses[size],
                partiallyFilled && 'opacity-50'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
