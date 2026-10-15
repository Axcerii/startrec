import type { CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import ScrollTrack from '../ui/ScrollTrack';
import InfoCard, { type InfoCardContent } from './InfoCard';
import SectionHeading from './SectionHeading';

const STEP_ICON = '/landing/icons/video-cinema.svg';

// Cards alternate between a white and a black one, each with its own tilt.
const CARD_STYLES = [
  { variant: 'light', rotation: '-3deg' },
  { variant: 'dark', rotation: '8deg' },
] as const;

export default function Steps() {
  const t = useTranslations('LandingPage.steps');
  const steps = t.raw('items') as InfoCardContent[];

  return (
    <section id="about" className="flex flex-col gap-11">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />

      {/* One viewport of scroll per card: they pile up while the panel stays pinned */}
      <ScrollTrack>
        <div style={{ height: `${(steps.length + 1) * 100}vh` }}>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-brand px-5 py-11 text-on-brand">
            <h3 className="text-center text-h3 lg:absolute lg:top-1/2 lg:left-[49px] lg:w-min lg:-translate-y-1/2 lg:text-left lg:text-h1">
              {t('panelTitle')}
            </h3>

            <ul className="relative h-[455px] w-full max-w-[324px]">
              {steps.map((step, index) => {
                const { variant, rotation } = CARD_STYLES[index % CARD_STYLES.length];

                return (
                  <li
                    key={index}
                    className="step-card absolute inset-0"
                    style={{ '--i': index, '--count': steps.length, '--rotation': rotation } as CSSProperties}
                  >
                    <InfoCard icon={STEP_ICON} title={step.title} text={step.text} variant={variant} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ScrollTrack>
    </section>
  );
}
