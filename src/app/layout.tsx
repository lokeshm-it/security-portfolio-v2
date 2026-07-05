import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { h } from "@/lib/h";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} \u2014 ${siteConfig.role}`,
          template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    openGraph: {
          title: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          siteName: siteConfig.name,
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: siteConfig.name,
          description: siteConfig.description,
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return h(
          "html",
      { lang: "en", suppressHydrationWarning: true },
          h(
                  "body",
            { className: `${inter.variable} font-sans antialiased` },
                  h(
                            ThemeProvider,
                    {
                                attribute: "class",
                                defaultTheme: "dark",
                                enableSystem: false,
                                disableTransitionOnChange: true,
                    },
                            h(Navbar, null),
                            h("main", null, children),
                            h(Footer, null),
                          ),
                ),
        );
}
