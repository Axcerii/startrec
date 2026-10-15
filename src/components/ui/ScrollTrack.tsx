'use client';

import type { ReactNode } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

type ScrollTrackProps = {
  className?: string;
  children: ReactNode;
};

/** Tall wrapper exposing its scroll progress to its children as `--progress`. */
export default function ScrollTrack({ className, children }: ScrollTrackProps) {
  const ref = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
