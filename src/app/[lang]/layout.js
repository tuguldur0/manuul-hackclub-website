import { Poppins, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, localePath, locales } from "./dictionaries";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

// Poppins has no Cyrillic, so the Mongolian page falls back to Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL("https://hackclub.tuguldur.xyz"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l)])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(lang),
      siteName: "Manuul Hack Club",
      locale: lang,
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
