import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '../ui/Reveal';

// Mockup geometry, in px of the 1440 × 1756 Figma frame.
const FRAME = { width: 1440, height: 1756 };
const CARD = { width: 324, height: 455 };

// Where each image rests around the title, and where it flies in from.
const IMAGES = [
  { rest: [172, 249], from: [-332, 122] },
  { rest: [77, 648], from: [-340, 727] },
  { rest: [394, -4], from: [-56, -466] },
  { rest: [745, 22], from: [907, -478] },
  { rest: [937, 250], from: [1451, 80] },
  { rest: [172, 1073], from: [-325, 1699] },
  { rest: [1020, 684], from: [1451, 909] },
  { rest: [905, 1031], from: [1416, 1759] },
  { rest: [538, 1259], from: [558, 1773] },
];

const percent = (value: number, total: number) => `${((value / total) * 100).toFixed(2)}%`;

export default function CircleGallery() {
  const t = useTranslations('LandingPage.circle');

  return (
    <section className="relative aspect-[1440/1756]">
      {IMAGES.map(({ rest, from }, index) => (
        // The slot sits at the resting place; the image travels to it once the slot is scrolled into view.
        <Reveal
          key={index}
          threshold={0.2}
          className="absolute aspect-[324/455] w-[22.5%]"
          style={{ left: percent(rest[0], FRAME.width), top: percent(rest[1], FRAME.height) }}
        >
          <div
            style={
              {
                '--from-x': percent(from[0] - rest[0], CARD.width),
                '--from-y': percent(from[1] - rest[1], CARD.height),
              } as CSSProperties
            }
            className="size-full translate-x-(--from-x) translate-y-(--from-y) opacity-0 transition-[translate,opacity] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[in-view=true]:translate-x-0 group-data-[in-view=true]:translate-y-0 group-data-[in-view=true]:opacity-100"
          >
            <div
              style={{ animationDelay: `${-index * 0.7}s` }}
              className="relative size-full animate-[float_6s_ease-in-out_infinite] overflow-hidden rounded-[clamp(8px,2.2vw,32px)]"
            >
              <Image
                src={`/landing/circle/${index + 1}.jpg`}
                alt=""
                fill
                sizes="(min-width: 1440px) 324px, 23vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      ))}

      <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-5 text-center text-h1 lg:whitespace-nowrap">
        {t('title')}
      </h2>
    </section>
  );
}
