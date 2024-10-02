import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Cairo-Bold.woff",
  variable: "--font-Cairo-Bold",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Cairo-Medium.woff",
  variable: "--font-Cairo-Medium",
  weight: "100 900",
});
const geistLight = localFont({
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
         <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
   
      </body>
    </html>
  );
}
