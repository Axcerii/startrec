'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealProps = {
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  children: ReactNode;
};

/**
 * Flags itself with `data-in-view` once visible. Children animate with
 * `group-data-[in-view=true]:` utilities.
 */
export default function Reveal({ className = '', style, threshold, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);

  return (
    <div ref={ref} data-in-view={inView} style={style} className={`group ${className}`}>
      {children}
    </div>
  );
}
