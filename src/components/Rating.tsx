'use client';

import { useState, useMemo } from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@react-aria/visually-hidden';

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

  // const steps = useMemo(() => {
  //   const count = max / precision;
  //   return Array.from({ length: count }, (_, i) => +(i * precision).toFixed(2));
  // }, [max, precision]);

  const displayValue = hoverValue ?? value;

  const handleClick = (val: number) => {
    if (!readOnly && onChange) onChange(val);
  };

  console.log(hoverValue)

  return (
    <div className={clsx('inline-flex items-center relative text-2xl text-yellow-500 text-left w-fit ', className)} role="radiogroup" aria-label="Rating">
      {Array.from({length: max}, (_, i) => +(i * 1).toFixed(2)).map((stepVal, idx) => {
        const filled = displayValue >= stepVal + precision;
        const partiallyFilled = !filled && displayValue >= stepVal;

        // const IconComponent = filled ? Icon : partiallyFilled ? Icon : EmptyIcon;

        // return (
        //   <button
        //     key={idx}
        //     type="button"
        //     onClick={() => handleClick(stepVal + precision)}
        //     onMouseEnter={() => setHoverValue(stepVal + precision)}
        //     onMouseLeave={() => setHoverValue(null)}
        //     disabled={readOnly}
        //     className={clsx(
        //       'relative text-yellow-500 transition-transform hover:scale-110 focus:outline-none',
        //       sizeClasses[size],
        //       readOnly && 'cursor-default'
        //     )}
        //     aria-label={`${stepVal + precision} rating`}
        //   >
        //     <IconComponent
        //       className={clsx(
        //         sizeClasses[size],
        //         partiallyFilled && 'opacity-50'
        //       )}
        //     />
        //   </button>
        // );
        return <span
          key={idx}
          onClick={() => handleClick(stepVal + precision)}
          onMouseEnter={() => setHoverValue(stepVal + precision)}
          onMouseLeave={() => setHoverValue(null)}
          // disabled={readOnly}
          className={clsx(
            'relative text-yellow-500 transition-transform hover:scale-110 focus:outline-none cursor-pointer',
            sizeClasses[size],
            readOnly && 'cursor-default'
          )}
          aria-label={`${stepVal + precision} rating`}
        >
          <label htmlFor={`partial-rating-${idx}`} className="cursor-auto" style={{
            width: `${idx === max ? `${precision * 100}%` : '100%'}%`, overflow: "hidden", position: "absolute",
          }}>
            <span className="flex pointer-events-none scale-105 ">
              <Icon
                className={clsx("select-none inline-block shrink-0", sizeClasses[size])}
              />
            </span>
            <VisuallyHidden >
              <span >3.5 Stars</span>
            </VisuallyHidden>
          </label>

          <VisuallyHidden >
            <input id={`partial-rating-${idx}`} type="radio" value="3.5" name="half-rating" />
          </VisuallyHidden>

          <label htmlFor="rating-background" className="cursor-auto">
            <span className="flex pointer-events-none w-fit">
              <EmptyIcon className={clsx("select-none inline-block shrink-0", sizeClasses[size])} />
            </span>
            <VisuallyHidden >
              <span >4 Stars</span>
            </VisuallyHidden>
          </label>

          <VisuallyHidden >
            <input id="rating-background" type="radio" value="4" name="half-rating" />
          </VisuallyHidden>
        </span>
      })}
    </div>
  );
}

