import Image from "next/image";
import { BiCartAddMini } from "../../../lib/@react-icons";

const PackageCard = ({ imageUrl }) => {
    return (
      <div className="h-[400px] md:h-[450px] w-[280px] md:w-[320px] mx-4 border rounded-md border-[#f3f3f3d5] bg-white">
        <div className="overflow-hidden">
          <Image
            src={imageUrl.url}
            alt={imageUrl.name}
            width={350}
            height={250}
            className="rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
  
        <div className="p-4">
          <h3 className="text-lg md:text-xl font-medium mb-2">{imageUrl.name}</h3>
          <p className="text-sm md:text-base text-[#595C5F] font-light mb-4">{imageUrl.about}</p>
          <div className="flex justify-between items-center">
            <p className="text-red-600 text-[16px] md:text-[18px] font-bold">{imageUrl.salary}</p>
            <p>:سعر الباقة</p>
          </div>
          <button className="bg-[--foreground] hover:bg-[--background] text-white font-semibold mt-4 py-2 lg:w-[285px] px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300">
            أضف إلى السلة
            <BiCartAddMini className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
    );
  };
  export default PackageCard;
