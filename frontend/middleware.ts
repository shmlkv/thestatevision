import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // const user = await getUserMeLoader(); // !!!
  const currentPath = request.nextUrl.pathname;

  // if (currentPath.startsWith("/dashboard") && user.ok === false) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/sitemap.xml",
      "/robots.txt",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!_next).*)"],
};
