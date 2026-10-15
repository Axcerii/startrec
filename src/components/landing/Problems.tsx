import { useTranslations } from 'next-intl';
import Reveal from '../ui/Reveal';
import SectionHeading from './SectionHeading';

type Problem = {
  title: string;
  text: string;
};

// Reveal order from the mockup: center, then left, then right.
const REVEAL_DELAYS_MS = [300, 0, 600];

export default function Problems() {
  const t = useTranslations('LandingPage.problems');
  const problems = t.raw('items') as Problem[];

  return (
    <section className="flex flex-col items-center gap-10">
      <SectionHeading title={t('title')} />

      <Reveal className="w-full bg-brand py-[33px] text-on-brand">
        <ul className="flex min-h-[269px] flex-col items-center justify-center gap-10 px-[43px] py-10 lg:flex-row lg:px-[54px]">
          {problems.map((problem, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${REVEAL_DELAYS_MS[index]}ms` }}
              className="flex flex-1 translate-y-5 flex-col gap-3 text-center opacity-0 transition duration-700 group-data-[in-view=true]:translate-y-0 group-data-[in-view=true]:opacity-100"
            >
              <h3 className="text-h3">{problem.title}</h3>
              <p>{problem.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
