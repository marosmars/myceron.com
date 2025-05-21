import "@/styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/700.css";

export const metadata: Metadata = {
  title: {
    default: "",
    template: `%s - `,
  },
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="relative flex flex-col">
        <main className="dark container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3" />
      </div>
    </Providers>
  );
}
