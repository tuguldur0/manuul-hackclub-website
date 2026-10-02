import Image from "next/image";
import sessionWide from "@/assets/photos/session-wide.jpg";
import sessionScreen from "@/assets/photos/session-screen.jpg";
import sessionRow from "@/assets/photos/session-row.jpg";
import projectCatsrqt from "@/assets/photos/project-catsrqt.jpg";
import projectPlaylist from "@/assets/photos/project-playlist.jpg";
import projectAscii from "@/assets/photos/project-ascii.jpg";
import { getDictionary, localePath, locales } from "./dictionaries";

const JOIN_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGijj4QvcHkYPE2CGAeol_XS0ev60Zh2rYFfHG1sQwFjv1Xw/viewform?usp=dialog";
const INSTAGRAM_URL = "https://www.instagram.com/manuulhackclub/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593205812871";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=American+Corner+Ulaanbaatar";

const external = { target: "_blank", rel: "noopener noreferrer" };

// Paired by index with dict.make.projects
const PROJECT_PHOTOS = [
  { photo: projectCatsrqt, tilt: "-rotate-2" },
  { photo: projectPlaylist, tilt: "rotate-1" },
  { photo: projectAscii, tilt: "-rotate-1" },
];

const LANGUAGE_NAMES = { en: "EN", mn: "МН" };

const BADGES = {
  sun: "bg-sun",
  carnation: "bg-carnation",
  go: "bg-go",
  white: "bg-white",
};

function ManulMark({ className }) {
  // Placeholder Pallas's cat until real artwork exists
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M8 30 4 20l13 5Z M56 30l4-10-13 5Z" fill="#F8F0AB" />
      <ellipse cx="32" cy="36" rx="27" ry="20" fill="#F8F0AB" />
      <path
        d="M24 18v6M32 16v7M40 18v6"
        stroke="#0B0724"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="34" r="6" fill="#FDE047" />
      <circle cx="42" cy="34" r="6" fill="#FDE047" />
      <circle cx="22" cy="34" r="3" fill="#0B0724" />
      <circle cx="42" cy="34" r="3" fill="#0B0724" />
      <path
        d="M10 40h8M11 45l7-2M54 40h-8M53 45l-7-2"
        stroke="#0B0724"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M29 42h6l-3 3Z" fill="#F56D5E" />
    </svg>
  );
}

function Logo({ small = false }) {
  return (
    <span
      className={`grid shrink-0 place-items-center border-2 border-astra/30 bg-surface ${small ? "size-8 rounded-lg" : "size-10 rounded-xl"}`}
    >
      <ManulMark className={small ? "size-6" : "size-8"} />
    </span>
  );
}

function Sticker({ children, className = "bg-white" }) {
  return (
    <span
      className={`inline-block border-2 border-night px-3 py-1 text-label uppercase text-night shadow-pop-sm ${className}`}
    >
      {children}
    </span>
  );
}

function Badge({ color, tilt = "", children }) {
  return (
    <span
      className={`inline-block rounded-full border-2 border-night px-4 leading-snug text-night shadow-pop-sm ${BADGES[color]} ${tilt}`}
    >
      {children}
    </span>
  );
}

function Button({ href, variant = "sun", children, ...rest }) {
  const styles = {
    sun: "bg-sun text-night",
    white: "bg-white text-night",
    night: "bg-night text-astra",
  };
  return (
    <a
      href={href}
      {...rest}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-night px-6 py-3 font-semibold shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function Snapshot({ src, alt, caption, sizes, className = "", tape = true, preload = false }) {
  return (
    <figure className={`border-2 border-night bg-white p-2 text-night shadow-pop ${className}`}>
      {tape && (
        <span
          aria-hidden="true"
          className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-3 bg-sun/80"
        />
      )}
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        preload={preload}
        className="aspect-[4/5] w-full object-cover"
      />
      {caption && (
        <figcaption className="px-1 pt-2 pb-1 text-sm font-semibold">{caption}</figcaption>
      )}
    </figure>
  );
}

function Arrow({ className }) {
  return (
    <svg viewBox="0 0 80 50" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 8c18 2 40 10 52 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 36l13 4 3-13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LanguageSwitch({ lang, label }) {
  return (
    <nav aria-label={label} className="flex rounded-full border-2 border-astra/40 p-0.5 text-xs font-bold">
      {locales.map((locale) => (
        <a
          key={locale}
          href={localePath(locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === lang ? "page" : undefined}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === lang ? "bg-sun text-night" : "text-astra/70 hover:text-astra"
          }`}
        >
          {LANGUAGE_NAMES[locale]}
        </a>
      ))}
    </nav>
  );
}

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:text-night"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-40 border-b-2 border-astra/20 bg-night/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#top" className="flex items-center gap-2.5 font-bold">
            <Logo />
            <span className="leading-tight">
              Manuul
              <span className="block text-xs font-semibold opacity-60">Hack Club</span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {[
              [t.nav.make, "#make"],
              [t.nav.workshops, "#workshops"],
              [t.nav.join, "#join"],
              [t.nav.contact, "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="underline-offset-4 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSwitch lang={lang} label={t.languageLabel} />
            <a
              href={JOIN_URL}
              {...external}
              className="hidden rounded-full border-2 border-night bg-sun px-4 py-1.5 text-sm font-semibold text-night shadow-pop-sm transition hover:-translate-y-0.5 sm:inline-block"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-12 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pt-16 lg:pb-28">
            <div>
              <Sticker className="-rotate-2 bg-white">{t.hero.sticker}</Sticker>
              <h1 className="mt-6 text-hero">
                {t.hero.titleBefore}
                <span className="inline-block -rotate-2 whitespace-nowrap border-[3px] border-night bg-sun px-3 text-night shadow-pop">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titleAfter}
              </h1>
              <p className="mt-7 max-w-lg text-lead font-normal! text-astra/85">
                {t.hero.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={JOIN_URL} {...external}>
                  {t.hero.join} <span aria-hidden="true">→</span>
                </Button>
                <Button href={INSTAGRAM_URL} variant="white" {...external}>
                  {t.hero.instagram}
                </Button>
              </div>
            </div>

            {/* Photo collage */}
            <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[560px]">
              <Snapshot
                src={sessionWide}
                alt={t.hero.photoAlt}
                sizes="(min-width: 1024px) 360px, 66vw"
                preload
                className="absolute top-2 right-0 w-[66%] rotate-2"
              />
              <Snapshot
                src={projectCatsrqt}
                alt={t.hero.closeupAlt}
                sizes="(min-width: 1024px) 240px, 44vw"
                tape={false}
                className="absolute bottom-0 left-0 w-[44%] -rotate-3"
              />
              <span className="absolute top-0 left-2 grid size-28 rotate-[-10deg] place-items-center rounded-full border-2 border-night bg-carnation text-center text-sm leading-tight font-extrabold text-night shadow-pop-sm sm:size-32 sm:text-base">
                {t.hero.badge[0]}
                <br />
                {t.hero.badge[1]}
              </span>
              <span className="absolute right-[6%] bottom-0 flex flex-col items-end text-sm font-semibold sm:right-[10%]">
                <Arrow className="h-10 w-16 rotate-180" />
                <span className="rotate-3">{t.hero.note}</span>
              </span>
            </div>
          </div>
        </section>

        {/* What we make */}
        <section id="make" className="border-y-2 border-astra/20 bg-surface py-[clamp(72px,10vw,128px)]">
          <div className="mx-auto max-w-6xl px-6">
            <Sticker className="rotate-1 bg-astra">{t.make.sticker}</Sticker>
            <p className="mt-8 max-w-5xl text-h2 text-[clamp(1.5rem,1rem+2.4vw,2.875rem)]! leading-[1.6]!">
              {t.make.sentence.map((part, i, parts) => {
                // Punctuation right after a badge stays with it so it never starts a line
                if (typeof part === "string") {
                  return typeof parts[i - 1] === "object" ? part.replace(/^[,.]/, "") : part;
                }
                const next = parts[i + 1];
                const punctuation = typeof next === "string" ? (next.match(/^[,.]/)?.[0] ?? "") : "";
                return (
                  <span key={i} className="whitespace-nowrap">
                    <Badge color={part.color} tilt={part.tilt}>
                      {part.text}
                    </Badge>
                    {punctuation}
                  </span>
                );
              })}
            </p>

            <h2 className="mt-20 text-h3">{t.make.title}</h2>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
              {t.make.projects.map((project, i) => (
                <Snapshot
                  key={project.caption}
                  src={PROJECT_PHOTOS[i].photo}
                  alt={project.alt}
                  caption={project.caption}
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className={`relative ${PROJECT_PHOTOS[i].tilt}`}
                />
              ))}
              <div className="col-span-2 flex rotate-1 flex-col justify-between border-2 border-night bg-sun p-6 text-night shadow-pop lg:col-span-1">
                <p className="text-label uppercase">{t.make.noteLabel}</p>
                <div className="mt-6">
                  <h3 className="text-lead">{t.make.noteTitle}</h3>
                  <p className="mt-2">{t.make.noteBody}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section id="workshops" className="py-[clamp(72px,10vw,128px)]">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_320px]">
            <div>
              <Sticker className="-rotate-1 bg-carnation">{t.workshops.sticker}</Sticker>
              <h2 className="mt-6 text-h2">{t.workshops.title}</h2>

              <div className="mt-10 border-2 border-dashed border-astra/60 p-6 sm:p-8">
                <p className="text-label uppercase text-sun">{t.workshops.nextLabel}</p>
                <p className="mt-3 text-h3">{t.workshops.nextTitle}</p>
                <p className="mt-3 max-w-md text-astra/80">{t.workshops.nextBody}</p>
                <div className="mt-6">
                  <Button href={INSTAGRAM_URL} {...external}>
                    @manuulhackclub <span aria-hidden="true">↗</span>
                  </Button>
                </div>
              </div>

              <ul className="mt-8">
                {t.workshops.events.map((event) => (
                  <li
                    key={event.date}
                    className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t-2 border-astra/20 py-5"
                  >
                    <span className="text-label uppercase text-astra/60">
                      {t.workshops.lastLabel}
                    </span>
                    <span className="text-lead">{event.date}</span>
                    <span className="text-astra/80">
                      {event.title} · {event.time} · {event.place}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Snapshot
              src={sessionScreen}
              alt={t.workshops.photoAlt}
              caption={t.workshops.photoCaption}
              sizes="(min-width: 1024px) 320px, 80vw"
              className="relative mx-auto w-full max-w-xs rotate-2"
            />
          </div>
        </section>

        {/* Join */}
        <section id="join" className="pb-[clamp(72px,10vw,128px)]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="on-light grid items-center gap-12 rounded-card border-2 border-night bg-sun p-8 text-night shadow-pop-lg sm:p-12 lg:grid-cols-[1fr_300px]">
              <div>
                <h2 className="text-hero">{t.join.title}</h2>
                <ol className="mt-8 space-y-4">
                  {t.join.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-4 text-lead">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-night bg-white text-base font-extrabold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-md">{t.join.body}</p>
                <div className="mt-8">
                  <Button href={JOIN_URL} variant="night" {...external}>
                    {t.join.cta} <span aria-hidden="true">→</span>
                  </Button>
                </div>
              </div>
              <Snapshot
                src={sessionRow}
                alt={t.join.photoAlt}
                sizes="(min-width: 1024px) 300px, 80vw"
                className="relative mx-auto hidden w-full max-w-xs -rotate-2 lg:block"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-[clamp(72px,10vw,128px)]">
          <div className="mx-auto max-w-6xl px-6">
            <Sticker className="rotate-1 bg-white">{t.contact.sticker}</Sticker>
            <h2 className="mt-6 text-h2">{t.contact.title}</h2>
            <ul className="mt-10 border-b-2 border-astra/30">
              {[
                [t.contact.instagram, "@manuulhackclub", INSTAGRAM_URL],
                [t.contact.facebook, "Manuul Hack Club", FACEBOOK_URL],
                [t.contact.visit, t.contact.place, MAPS_URL],
              ].map(([name, handle, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    {...external}
                    className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t-2 border-astra/30 px-2 py-6 transition-colors hover:bg-sun hover:text-night sm:px-4"
                  >
                    <span className="w-32 text-label uppercase">{name}</span>
                    <span className="text-h3">{handle}</span>
                    <span
                      aria-hidden="true"
                      className="ml-auto text-h3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-astra/20 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo small />
            <span>{t.footer.made}</span>
          </div>
          <a href="https://hackclub.com" {...external} className="hover:text-sun">
            {t.footer.partOf} ↗
          </a>
        </div>
      </footer>
    </>
  );
}
