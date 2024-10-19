import React from "react";
import { FaExternalLinkAltMini } from "../../../lib/@react-icons";
import Link from "next/link";
import CarouselComponent from "../../CarouselComponent";

const sliderImageUrl = [
    {
        url: "/images/packs/pack-1_350x265.webp",
        name: "مذكرة الرياضيات الصف الثالث الثانوي",
        about: "باقة مذكرةات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
        salary: "KWD 50",
    },
    {
        url: "/images/packs/pack-1_350x265.webp",
        name: "مذكرة الرياضيات الصف الثالث الثانوي",
        about: "باقة مذكرةات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
        salary: "KWD 45",
    },
    {
        url: "/images/packs/pack-1_350x265.webp",
        name: "مذكرة الرياضيات الصف الثالث الثانوي",
        about: "باقة مذكرةات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
        salary: "KWD 60",
    },
    {
        url: "/images/packs/pack-1_350x265.webp",
        name: "مذكرة الرياضيات الصف الثالث الثانوي",
        about: "باقة مذكرةات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
        salary: "KWD 55",
    },
    {
        url: "/images/packs/pack-1_350x265.webp",
        name: "مذكرة الرياضيات الصف الثالث الثانوي",
        about: "باقة مذكرةات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
        salary: "KWD 40",
    },
];

const BestNotes = () => {
    return (
        <div className="w-full bg-[#f3f3f3ec] py-12 md:py-24 px-6 md:px-12 text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[20px] md:text-[22px] border-b-[3px] border-[--foreground] font-[family-name:var(--font-Cairo-Bold)]">
                    تصفح أفضل المذكرات
                </h2>
                <Link
                    href="/"
                    className="font-[family-name:var(--font-Cairo-Bold)] flex items-center gap-1 text-[--background] hover:text-[--foreground] transition"
                >
                    المزيد <FaExternalLinkAltMini />
                </Link>
            </div>
            <CarouselComponent sliderImageUrl={sliderImageUrl} title={"المذكرة"} />
        </div>
    );
};

export default BestNotes;
