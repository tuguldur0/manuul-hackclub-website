// Page copy for each language. Badge segments in `make.sentence` are
// objects; plain strings render as normal text between them.

const en = {
  meta: {
    title: "Manuul Hack Club",
    description:
      "A free, student-led coding club for teens (13–18) in Ulaanbaatar. Websites, hardware, games and everything in between.",
  },
  skip: "Skip to content",
  languageLabel: "Language",
  nav: {
    make: "What we make",
    workshops: "Workshops",
    join: "Join",
    contact: "Contact",
    cta: "Join the club",
  },
  hero: {
    sticker: "Hack Club · Ulaanbaatar",
    titleBefore: "Build weird stuff with ",
    titleHighlight: "friends.",
    titleAfter: "",
    body: "A free coding club for teens in Ulaanbaatar. We meet at American Corner to make websites, hardware and games, and actually ship them.",
    join: "Join the club",
    instagram: "Follow on Instagram",
    badge: ["free!", "ages 13–18"],
    note: "that’s us!",
    photoAlt:
      "Members coding on laptops around a big table at American Corner, with code on the TV screen",
    closeupAlt: "Close-up of a member's laptop showing a site they built",
  },
  make: {
    sticker: "What we do",
    sentence: [
      "Every session we ",
      { text: "open laptops", color: "sun", tilt: "-rotate-1" },
      ", ",
      { text: "write real code", color: "white", tilt: "rotate-1" },
      ", ",
      { text: "break things", color: "carnation", tilt: "-rotate-2" },
      " and ",
      { text: "ship", color: "go", tilt: "rotate-2" },
      " something we’re proud of. No experience needed.",
    ],
    title: "Made at the club",
    projects: [
      {
        caption: "CATSRQT, coded from a blank HTML file",
        alt: "A laptop showing HTML code next to a live preview of a site titled CATSRQT in pixel lettering",
      },
      {
        caption: "A playlist page with Spotify embeds",
        alt: "A member's laptop showing CSS on one side and a playlist page with Spotify embeds on the other",
      },
      {
        caption: "ASCII art, typed out by hand",
        alt: "A member typing in VS Code, with ASCII art in an HTML file on screen",
      },
    ],
    noteLabel: "Not just websites",
    noteTitle: "Manuul56HW",
    noteBody:
      "A handwired 56-key ergonomic keyboard with a 3D-printed case and an STM32 brain.",
  },
  workshops: {
    sticker: "Workshops",
    title: "Free workshops at American Corner.",
    nextLabel: "Next up",
    nextTitle: "Date coming soon",
    nextBody:
      "We post every workshop on Instagram first. Follow so you don’t miss it.",
    lastLabel: "Last time",
    events: [
      {
        date: "Sep 30",
        title: "Workshop",
        time: "16:00–18:00",
        place: "American Corner Ulaanbaatar",
      },
    ],
    photoAlt: "Members working on laptops while code is shown on a big screen",
    photoCaption: "Code on the big screen, laptops out",
  },
  join: {
    title: "Want in?",
    steps: [
      "Fill out the form",
      "Come to a workshop at American Corner",
      "Build something & show it off",
    ],
    body: "Open to all students aged 13–18. Never coded before? Perfect, that’s what we’re here for.",
    cta: "Fill out the form",
    photoAlt: "A row of members focused on their laptops during a session",
  },
  contact: {
    sticker: "Contact",
    title: "Say hi",
    instagram: "Instagram",
    facebook: "Facebook",
    visit: "Visit us",
    place: "American Corner Ulaanbaatar",
  },
  footer: {
    made: "Manuul Hack Club · made by teens in Ulaanbaatar",
    partOf: "Part of Hack Club",
  },
};

const mn = {
  meta: {
    title: "Manuul Hack Club",
    description:
      "Улаанбаатар дахь 13–18 насны өсвөр үеийнхэнд зориулсан, сурагчдын удирддаг үнэгүй програмчлалын клуб. Вэбсайт, төхөөрөмж, тоглоом гээд бүгдийг хийдэг.",
  },
  skip: "Үндсэн хэсэг рүү шилжих",
  languageLabel: "Хэл",
  nav: {
    make: "Бүтээлүүд",
    workshops: "Воркшоп",
    join: "Нэгдэх",
    contact: "Холбоо барих",
    cta: "Клубт нэгдэх",
  },
  hero: {
    sticker: "Hack Club · Улаанбаатар",
    titleBefore: "Найзуудтайгаа хамт ",
    titleHighlight: "сонин юм",
    titleAfter: " бүтээцгээе.",
    body: "Улаанбаатар дахь өсвөр үеийнхэнд зориулсан үнэгүй програмчлалын клуб. Бид American Corner-т цуглаж вэбсайт, төхөөрөмж, тоглоом хийгээд, бусдад бодитоор хүргэдэг.",
    join: "Клубт нэгдэх",
    instagram: "Instagram-д дагах",
    badge: ["үнэгүй!", "13–18 нас"],
    note: "энэ бол бид!",
    photoAlt:
      "American Corner-т том ширээ тойрон лаптоп дээрээ код бичиж буй гишүүд, ТВ дэлгэцэн дээр код харагдаж байна",
    closeupAlt: "Гишүүний хийсэн сайт харагдаж буй лаптопын ойрын зураг",
  },
  make: {
    sticker: "Бид юу хийдэг вэ",
    sentence: [
      "Уулзалт болгон бид ",
      { text: "лаптопоо нээж", color: "sun", tilt: "-rotate-1" },
      ", ",
      { text: "жинхэнэ код бичиж", color: "white", tilt: "rotate-1" },
      ", ",
      { text: "алдаа гаргаж", color: "carnation", tilt: "-rotate-2" },
      ", эцэст нь ",
      { text: "бахархах зүйлээ", color: "go", tilt: "rotate-2" },
      " бүтээдэг. Туршлага огт хэрэггүй.",
    ],
    title: "Клубт хийсэн бүтээлүүд",
    projects: [
      {
        caption: "CATSRQT — хоосон HTML файлаас эхлэн бичсэн",
        alt: "HTML код болон CATSRQT гэсэн пиксел үсэгтэй сайтын урьдчилсан харагдацыг харуулсан лаптоп",
      },
      {
        caption: "Spotify тоглуулагчтай плейлист хуудас",
        alt: "Нэг талд нь CSS, нөгөө талд нь Spotify тоглуулагчтай плейлист хуудас харагдаж буй гишүүний лаптоп",
      },
      {
        caption: "Гараар бичсэн ASCII зураг",
        alt: "VS Code дээр HTML файлд ASCII зураг бичиж буй гишүүн",
      },
    ],
    noteLabel: "Зөвхөн вэбсайт биш",
    noteTitle: "Manuul56HW",
    noteBody:
      "56 товчтой, гараар утасдсан эргономик гар. Хайрцгийг нь 3D принтерээр хэвлэж, STM32 микроконтроллероор ажиллуулдаг.",
  },
  workshops: {
    sticker: "Воркшоп",
    title: "American Corner-т үнэгүй воркшоп.",
    nextLabel: "Дараагийнх",
    nextTitle: "Огноо удахгүй",
    nextBody:
      "Воркшоп бүрийг Instagram-д хамгийн түрүүнд зарладаг. Алгасахгүйн тулд дагаарай.",
    lastLabel: "Өмнөх",
    events: [
      {
        date: "9-р сарын 30",
        title: "Воркшоп",
        time: "16:00–18:00",
        place: "American Corner Ulaanbaatar",
      },
    ],
    photoAlt: "Том дэлгэцэн дээр код харуулж байхад лаптоп дээрээ ажиллаж буй гишүүд",
    photoCaption: "Том дэлгэцэн дээр код, бүгд лаптоптойгоо",
  },
  join: {
    title: "Нэгдэх үү?",
    steps: [
      "Анкет бөглө",
      "American Corner-т болох воркшопд ир",
      "Ямар нэг юм бүтээгээд бусдад үзүүл",
    ],
    body: "13–18 насны бүх сурагчдад нээлттэй. Өмнө нь код бичиж үзээгүй юу? Зүгээр, бид яг үүний төлөө байгаа.",
    cta: "Анкет бөглөх",
    photoAlt: "Уулзалтын үеэр лаптоп дээрээ анхааралтай ажиллаж буй гишүүд",
  },
  contact: {
    sticker: "Холбоо барих",
    title: "Бидэнтэй холбогдоорой",
    instagram: "Instagram",
    facebook: "Facebook",
    visit: "Хаяг",
    place: "American Corner Ulaanbaatar",
  },
  footer: {
    made: "Manuul Hack Club · Улаанбаатарын өсвөр үеийнхэн бүтээв",
    partOf: "Hack Club-ийн нэг хэсэг",
  },
};

const dictionaries = { en, mn };

export const locales = Object.keys(dictionaries);

export const hasLocale = (locale) => Object.hasOwn(dictionaries, locale);

export const getDictionary = (locale) => dictionaries[locale];

// "/" serves English (rewritten in next.config.mjs); other languages live under /{lang}
export const localePath = (locale) => (locale === "en" ? "/" : `/${locale}`);
