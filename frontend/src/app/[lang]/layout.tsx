import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
import { IBM_Plex_Sans } from "next/font/google";
import { i18n } from "../../../i18n-config";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const font = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin-ext", "cyrillic"],
});
const fontBold = IBM_Plex_Sans({
  weight: "700",
  subsets: ["latin-ext", "cyrillic"],
});

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  const { notificationBanner, navbar, footer } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data.attributes.url
  );

  return (
    <html lang={params.lang} className={`  ${font.className}`}>
      <body>
        <div id="stars-container" className="relative max-w-screen-2xl mx-auto">
          <script type="module" src="./hoisted.ae1305ea.js"></script>
          <div className="absolute top-0 left-0 right-0 h-[600px] ">
            <canvas
              className="js-stars absolute top-0 left-0 w-full transition duration-1000 origin-bottom opacity-0 data-[ready]:opacity-100 scale-[0.98] data-[ready]:scale-100 h-40 sm:h-96"
              width="3072"
              height="768"
              data-ready="true"
            ></canvas>
            <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent via-transparent via-50% dark:to-slate-950"></div>
            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-transparent via-50% dark:to-slate-950"></div>
          </div>
        </div>{" "}
        <Navbar
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        />
        <main className=" z-10 relative dark:text-gray-100 min-h-screen">
          {children}
        </main>
        <Banner data={notificationBanner} />
        <Footer
          logoUrl={footerLogoUrl}
          logoText={footer.footerLogo.logoText}
          menuLinks={footer.menuLinks}
          categoryLinks={footer.categories.data}
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
