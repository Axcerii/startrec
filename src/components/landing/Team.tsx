'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useCarousel } from '../../hooks/useCarousel';
import CarouselArrows from '../ui/CarouselArrows';

type TeamMember = {
  name: string;
  role: string;
  favoriteFilm: string;
  bio: string;
};

// Top of each portrait on the 659 × 4159 film strip, in mockup pixels.
const PHOTO_TOPS = [19, 710, 1401, 2092, 2784, 3478];
const FILM_STRIP = '/landing/team/film-strip.png';
const FILM_CROP = 'absolute top-[-45.31%] h-[190.63%] max-w-none';

export default function Team() {
  const t = useTranslations('LandingPage');
  const members = t.raw('team.members') as TeamMember[];
  const { index, previous, next } = useCarousel(members.length);
  const member = members[index];
  const filmOffset = PHOTO_TOPS[index] - PHOTO_TOPS[0];

  return (
    <section id="team" className="relative overflow-hidden bg-brand text-on-brand">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 lg:relative lg:block lg:h-[936px] lg:p-0">
        <h2 className="text-h3 lg:absolute lg:top-[82px] lg:left-[6.4%]">{t('team.title')}</h2>

        <div
          key={index}
          className="animate-[fade-in-up_0.5s_ease-out] lg:absolute lg:top-[244px] lg:left-[6.4%] lg:w-[36.6%]"
        >
          <h3 className="text-h3">{member.name}</h3>
          <p className="text-caption">{member.role}</p>
          {member.favoriteFilm && (
            <p className="mt-2 text-caption">
              {t('team.favoriteFilm', { film: member.favoriteFilm })}
            </p>
          )}
          <p className="mt-8 lg:mt-[63px]">{member.bio}</p>
        </div>

        <CarouselArrows
          onPrevious={previous}
          onNext={next}
          previousLabel={t('carousel.previous')}
          nextLabel={t('carousel.next')}
          className="z-10 lg:absolute lg:top-[742px] lg:left-[34%]"
        />

        {/* Film strip: scrolls one frame per member */}
        <div className="relative mx-auto h-[360px] w-[330px] shrink-0 overflow-hidden [--film-scale:0.5] lg:absolute lg:top-[113px] lg:left-[47.4%] lg:h-[823px] lg:w-[659px] lg:[--film-scale:1]">
          <div
            className="relative h-[4159px] w-[659px] origin-top-left scale-(--film-scale) transition-[translate] duration-700 ease-in-out"
            style={{ translate: `0 calc(${-filmOffset}px * var(--film-scale))` }}
          >
            <div className="absolute top-0 left-0 h-[659px] w-[3466px] origin-top-left translate-x-[659px] rotate-90 overflow-hidden">
              <Image src={FILM_STRIP} alt="" width={4096} height={1485} className={`${FILM_CROP} left-0 w-full`} />
            </div>
            <div className="absolute top-[3466px] left-0 h-[659px] w-[694px] origin-top-left translate-x-[659px] rotate-90 overflow-hidden">
              <Image
                src={FILM_STRIP}
                alt=""
                width={4096}
                height={1485}
                className={`${FILM_CROP} left-[-399.51%] w-[499.51%]`}
              />
            </div>

            {members.map((teamMember, memberIndex) => (
              <Image
                key={memberIndex}
                src={`/landing/team/${memberIndex + 1}.jpg`}
                alt={teamMember.name}
                width={455}
                height={660}
                style={{ top: PHOTO_TOPS[memberIndex] }}
                className="absolute left-[99px] h-[660px] w-[455px] rounded-[23.69px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 shadow-section-inset" />
    </section>
  );
}
