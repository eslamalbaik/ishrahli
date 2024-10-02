import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const CairoBoldSans = localFont({
  src: "./fonts/Cairo-Bold.woff",
  variable: "--font-Cairo-Bold",
  weight: "100 900",
});
const MediumCairo = localFont({
  src: "./fonts/Cairo-Medium.woff",
  variable: "--font-Cairo-Medium",
  weight: "100 900",
});
const CairoLight = localFont({
  src: "./fonts/Cairo-Light.woff",
  variable: "--font-Cairo-ExtraLight",
  weight: "100 900",
});
// IBMPlexSansArabic-ExtraLight.woff
export const metadata = {
  title: " اشرحلي",
  description: "اشرحلي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
         <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${CairoBoldSans.variable} ${MediumCairo.variable} ${CairoLight.variable} antialiased`}
      >
        {children}
   
      </body>
    </html>
  );
}
