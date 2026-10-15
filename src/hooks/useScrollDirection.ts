'use client';

import { useEffect, useState } from 'react';

// Ignore tiny scroll movements so the header does not flicker.
const MIN_DELTA_PX = 4;

/** Tells whether the page sits at its top and whether the user is scrolling down. */
export function useScrollDirection(topThresholdPx = 89) {
  const [state, setState] = useState({ atTop: true, scrollingDown: false });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < MIN_DELTA_PX) return;

      const atTop = y < topThresholdPx;
      const scrollingDown = y > lastY;
      lastY = y;

      setState((previous) =>
        previous.atTop === atTop && previous.scrollingDown === scrollingDown
          ? previous
          : { atTop, scrollingDown },
      );
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [topThresholdPx]);

  return state;
}
