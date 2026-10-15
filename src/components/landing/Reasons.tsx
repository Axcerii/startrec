import { useTranslations } from 'next-intl';
import Reveal from '../ui/Reveal';
import InfoCard, { type InfoCardContent } from './InfoCard';
import SectionHeading from './SectionHeading';

const IDEA_ICONS = ['light-bulb', 'checklist', 'user-check', 'community'];
const PROJECT_ICONS = ['eye', 'handshake', 'task', 'popcorn'];
const CARD_ROTATIONS = ['-rotate-[1.98deg]', 'rotate-[3.14deg]'];
const CARD_STAGGER_MS = 250;

type ReasonsPanelProps = {
  title: string;
  cards: InfoCardContent[];
  icons: string[];
};

/** Yellow panel whose cards fade in over the title, from left to right. */
function ReasonsPanel({ title, cards, icons }: ReasonsPanelProps) {
  return (
    <Reveal className="relative overflow-hidden bg-brand px-[15px] py-16 xl:h-[709px] xl:py-0">
      <h3 className="mx-auto max-w-[943px] text-center font-display text-[clamp(48px,8.9vw,128px)] leading-[1.17] font-black text-on-brand xl:absolute xl:top-[200px] xl:left-1/2 xl:w-[943px] xl:-translate-x-1/2">
        {title}
      </h3>

      <ul className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 xl:absolute xl:inset-x-[15px] xl:top-1/2 xl:mt-0 xl:-translate-y-1/2 xl:grid-cols-4 xl:gap-4">
        {cards.map((card, index) => (
          <li
            key={card.title}
            style={{ transitionDelay: `${index * CARD_STAGGER_MS}ms` }}
            className="w-full max-w-[324px] opacity-0 transition-opacity duration-700 group-data-[in-view=true]:opacity-100"
          >
            <InfoCard
              icon={`/landing/icons/${icons[index]}.svg`}
              title={card.title}
              text={card.text}
              className={CARD_ROTATIONS[index % CARD_ROTATIONS.length]}
            />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Reasons() {
  const t = useTranslations('LandingPage.reasons');

  return (
    <section className="flex flex-col gap-11">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />

      <div>
        <ReasonsPanel
          title={t('idea.title')}
          cards={t.raw('idea.items') as InfoCardContent[]}
          icons={IDEA_ICONS}
        />
        <p className="px-5 py-24 text-center text-h3 lg:py-[270px]">{t('bridge')}</p>
        <ReasonsPanel
          title={t('project.title')}
          cards={t.raw('project.items') as InfoCardContent[]}
          icons={PROJECT_ICONS}
        />
      </div>
    </section>
  );
}
