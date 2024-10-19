import { FaExternalLinkAltMini } from "../../../lib/@react-icons";
import Link from "next/link";
import { sliderImageUrl } from "../../../data/data";
import CarouselComponent from "../../CarouselComponent";

const BestPackages = () => {
    return (
        <div className="w-full bg-[#f3f3f3ec] py-12 md:py-24 px-6 md:px-12 text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[20px] md:text-[22px] border-b-[3px] border-[--foreground] font-[family-name:var(--font-Cairo-Bold)]">
                    تصفح أفضل الباقات
                </h2>
                <Link
                    href="/"
                    className="font-[family-name:var(--font-Cairo-Bold)] flex items-center gap-1 text-[--background] hover:text-[--foreground] transition"
                >
                    المزيد <FaExternalLinkAltMini />
                </Link>
            </div>
            <CarouselComponent
                sliderImageUrl={sliderImageUrl}
                title={"الباقة"}
            />
        </div>
    );
};

export default BestPackages;
