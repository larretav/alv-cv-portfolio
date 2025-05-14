'use client';

import { useState, useRef, MouseEvent } from 'react';
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
  const rootRef = useRef<HTMLDivElement>(null);

  const roundValueToPrecision = (val: number) => {
    const nearest = Math.round(val / precision) * precision;
    return Number(nearest.toFixed(2));
  };

  const getValueFromPosition = (e: MouseEvent<HTMLDivElement>) => {
    const { left, width } = rootRef.current?.getBoundingClientRect() || { left: 0, width: 1 };
    const percent = (e.clientX - left) / width;
    const rawValue = percent * max;
    return roundValueToPrecision(rawValue);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (readOnly) return;
    const newHover = getValueFromPosition(e);
    setHoverValue(newHover);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (readOnly || !onChange) return;
    const clickedValue = getValueFromPosition(e);
    onChange(clickedValue);
  };

  const displayValue = hoverValue ?? value;

  return (
    <div
      ref={rootRef}
      className={clsx('relative flex items-center  select-none w-fit ', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-readonly={readOnly}
    >
      {Array.from({ length: max }).map((_, i) => {
        const itemValue = i + 1;
        const fillLevel = Math.min(Math.max(displayValue - i, 0), 1);

        return (
          <div key={i} className={clsx('relative', {
            "*:transition-transform *:hover:scale-110": !readOnly
          })} >
            <EmptyIcon
              className={clsx(
                sizeClasses[size],
                'text-gray-300 absolute top-0 left-0  ',{
                  "cursor-pointer": !readOnly
                }
              )}
              aria-hidden="true"
            />
            <div
              className="overflow-hidden"
              style={{ width: `${fillLevel * 100}%` }}
            >
              <Icon
                className={clsx(
                  sizeClasses[size],
                  'text-yellow-500 relative z-10  ',{
                    "cursor-pointer": !readOnly
                  }
                )}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
