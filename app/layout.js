import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from "./redux-provider";
import { Toaster } from "react-hot-toast";
const CairoBoldSans = localFont({
    src: "./fonts/ExpoArabic-Book.ttf",
    variable: "--font-Cairo-Bold",
    weight: "100 900",
});
const MediumCairo = localFont({
    src: "./fonts/ExpoArabic-Book.ttf",
    variable: "--font-Cairo-Medium",
    weight: "100 900",
});
const CairoLight = localFont({
    src: "./fonts/ExpoArabic-Book.ttf",
    variable: "--font-Cairo-ExtraLight",
    weight: "100 900",
});
export const metadata = {
    title: " اشرحلي",
    description: "اشرحلي",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl" >
            <body
                className={`${CairoBoldSans.variable} ${MediumCairo.variable} ${CairoLight.variable} antialiased`}  >
                <ReduxProvider>
                    <Toaster />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
