import Image from "next/image";
import Link from "next/link";

const Logo = ({ classNameAdd }) => {
  return (
    <Link href="/" className="cursor-pointer">
        <Image
      src="/images/logo_optimized.webp"
      width={100}      
     style={{ width: "120px", height: "92px" }}
      height={100}
      className={` w-auto h-auto 2xl:ml-52 md:max-w-[180px] max-sm:h-[85px] max-sm:w-[120px] ${classNameAdd}`}
      alt="logo"
      priority
    />
    </Link>
  );
};

export default Logo;
