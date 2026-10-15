'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useCarousel, type CarouselDirection } from '../../hooks/useCarousel';
import CarouselArrows from '../ui/CarouselArrows';

type Testimonial = {
  name: string;
  firstName: string;
  role: string;
  location: string;
  quote: string;
  photo: string;
};

// Tilt of each printed photo by depth in the pile (0 = on top).
const SHEET_ROTATIONS_DEG = [0, 7.3, -6.66];
const sheetRotation = (position: number) => SHEET_ROTATIONS_DEG[position % SHEET_ROTATIONS_DEG.length];

/** Animation of the one photo that travels between the top and the bottom of the pile. */
function sheetAnimation(position: number, count: number, direction: CarouselDirection | null) {
  if (direction === 'next' && position === count - 1) return 'animate-[sheet-to-back_0.9s_ease-in-out]';
  if (direction === 'previous' && position === 0) return 'animate-[sheet-to-front_0.9s_ease-in-out]';
  return '';
}

export default function Testimonials() {
  const t = useTranslations('LandingPage');
  const testimonials = t.raw('testimonials.items') as Testimonial[];
  const count = testimonials.length;
  const { index, direction, previous, next } = useCarousel(count);
  const testimonial = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-brand text-on-brand">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 py-16 lg:relative lg:block lg:h-[936px] lg:p-0">
        {/* Pile of printed photos: the top one slides out and goes under the pile */}
        <div className="relative aspect-[620/902] w-full max-w-[620px] -rotate-3 lg:absolute lg:top-[63px] lg:left-[5.4%] lg:w-[43.1%] lg:-rotate-[11.33deg]">
          {testimonials.map((item, itemIndex) => {
            const position = (itemIndex - index + count) % count;

            return (
              <article
                key={item.photo}
                aria-hidden={position !== 0}
                style={
                  {
                    zIndex: count - position,
                    transform: `rotate(${sheetRotation(position)}deg)`,
                    '--back-rotation': `${sheetRotation(count - 1)}deg`,
                  } as CSSProperties
                }
                className={`absolute inset-0 bg-foreground px-[11%] pt-[7.4%] shadow-sheet transition-transform duration-700 ${sheetAnimation(position, count, direction)}`}
              >
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={483}
                  height={504}
                  className="aspect-[483/504] w-full object-cover"
                />
                <p className="mt-5 text-h3">{item.name}</p>
                <p className="mt-2.5 text-caption">{item.role}</p>
              </article>
            );
          })}
        </div>

        {/* Script page holding the quote */}
        <div className="relative w-full max-w-[646px] overflow-hidden bg-foreground px-[46px] pt-[71px] shadow-sheet lg:absolute lg:top-[17px] lg:left-[52.6%] lg:h-[902px] lg:w-[44.9%]">
          <h2 className="text-h3">{t('testimonials.heading')}</h2>
          <div key={index} className="animate-[fade-in-up_0.5s_ease-out]">
            <p className="mt-3 text-caption">{testimonial.location}</p>
            <p className="mt-[58px] text-center text-h4">{testimonial.firstName}</p>
            <blockquote className="mx-auto mt-[59px] max-w-[474px] text-h3">{testimonial.quote}</blockquote>
          </div>
          <Image
            src="/landing/testimonials/script.png"
            alt=""
            width={604}
            height={854}
            className="mt-10 h-48 w-full object-cover object-top lg:absolute lg:top-[654px] lg:left-[22px] lg:mt-0 lg:h-auto lg:w-[calc(100%-44px)]"
          />
        </div>

        <CarouselArrows
          onPrevious={previous}
          onNext={next}
          previousLabel={t('carousel.previous')}
          nextLabel={t('carousel.next')}
          className="z-[60] lg:absolute lg:top-[754px] lg:left-[39.1%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 shadow-section-inset" />
    </section>
  );
}
