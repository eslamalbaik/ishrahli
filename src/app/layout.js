import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
