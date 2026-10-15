import Image from 'next/image';
import { useTranslations } from 'next-intl';

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq() {
  const t = useTranslations('LandingPage.faq');
  const items = t.raw('items') as FaqItem[];

  return (
    <section className="flex flex-col items-center px-5">
      <h2 className="text-center font-display text-[clamp(48px,6.67vw,96px)] leading-none">{t('title')}</h2>

      <ul className="mt-16 flex w-full max-w-[1173px] flex-col gap-[30px] lg:mt-[146px]">
        {items.map((item, index) => (
          <li key={index}>
            <details className="group rounded-[20px] bg-brand p-5 text-on-brand">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-h6 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.question}</span>
                <Image
                  src="/landing/icons/plus.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-1">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
