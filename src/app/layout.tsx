import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import Header from "../components/Header"
{
  /* <link rel="icon" href="/favicon.ico" sizes="any" /> */
}
import Footer from "../components/Footer";
import Head from "next/head";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCyberAcademy",
  description: "MCyberAcademy a great platform to learn cyber security",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index:false,follow:false
  },
  other:{
    'google-site-verification':'zPXO_JyO-QH8K1yqMSLvId9fvkTEDNewhJHq4tsZaHM'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "LocalBusiness",
  //   name: "mcyber academy",
  //   image: "https://www.mcyberacademy.com/",
  //   "@id": "https://www.mcyberacademy.com/",
  //   url: "https://www.mcyberacademy.com/",
  //   telephone: "096535 33324",
  //   address: {
  //     "@type": "PostalAddress",
  //     streetAddress:
  //       "2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town",
  //     addressLocality: "Rohtak",
  //     postalCode: "124001",
  //     addressCountry: "IN",
  //   },
  //   openingHoursSpecification: {
  //     "@type": "OpeningHoursSpecification",
  //     dayOfWeek: [
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //     ],
  //     opens: "09:00",
  //     closes: "06:00",
  //   },
  //   sameAs: [
  //     "https://www.instagram.com/mcyberacademy/",
  //     "https://x.com/mcyberacademy1",
  //     "https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg",
  //     "https://www.linkedin.com/company/103400446/admin/dashboard/",
  //     "https://www.mcyberacademy.com/",
  //   ],
  // };
  // const pathname = usePathname();
 
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "mcyber academy",
            image: "https://www.mcyberacademy.com/",
            "@id": "https://www.mcyberacademy.com/",
            url: "https://www.mcyberacademy.com/",
            telephone: "096535 33324",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town",
              addressLocality: "Rohtak",
              postalCode: "124001",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "06:00",
            },
            sameAs: [
              "https://www.instagram.com/mcyberacademy/",
              "https://x.com/mcyberacademy1",
              "https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg",
              "https://www.linkedin.com/company/103400446/admin/dashboard/",
              "https://www.mcyberacademy.com/",
            ],
          }) }}
        />
      </Head>
      <body
        className={cn("relative h-full antialiased font-sans", inter.className)}
      >
        <ChakraProvider>
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
 
}
