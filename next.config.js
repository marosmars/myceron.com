/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  output: "export", // Enables static export in Next.js 13+
  trailingSlash: false, // Optional: keeps URLs like /about/
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
