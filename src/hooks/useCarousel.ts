'use client';

import { useState } from 'react';

export type CarouselDirection = 'next' | 'previous';

type CarouselState = {
  index: number;
  direction: CarouselDirection | null;
};

/** Index handling for a looping carousel of `length` slides, with the last move's direction. */
export function useCarousel(length: number) {
  const [state, setState] = useState<CarouselState>({ index: 0, direction: null });

  const previous = () =>
    setState(({ index }) => ({ index: (index - 1 + length) % length, direction: 'previous' }));
  const next = () => setState(({ index }) => ({ index: (index + 1) % length, direction: 'next' }));

  return { ...state, previous, next };
}
