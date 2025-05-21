import { LOCALES } from "@/i18n/intl";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return LOCALES.map((lcl) => {
    return { locale: lcl };
  });
}

export default function Home() {
  return (
    <section className="flex flex-col items-center max-h-screen justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <p className="font-mono tracking-[.25em]  text-5xl font-extrabold">Myceron</p>
      </div>
    </section>
  );
}
