'use client';

import type { ReactNode } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

/** Fixed header that slides away when scrolling down and back in when scrolling up. */
export default function StickyHeader({ children }: { children: ReactNode }) {
  const { atTop, scrollingDown } = useScrollDirection();
  const hidden = scrollingDown && !atTop;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-30 transition-[translate,background-color] duration-500 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${atTop ? 'bg-transparent' : 'bg-page/85 backdrop-blur-sm'}`}
    >
      {children}
    </div>
  );
}
