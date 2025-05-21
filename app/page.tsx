"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { DEFAULT_LOCALE, LOCALES } from "@/i18n/intl";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language.split("-")[0];

    const locale = LOCALES.includes(userLang) ? userLang : DEFAULT_LOCALE;

    router.replace(`/${locale}`);
  }, [router]);

  return <></>; // or a loading spinner
}
