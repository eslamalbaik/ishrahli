import Image from "next/image";

const Logo = ({classNameAdd}) => {
  return (
    <Image
      src="/images/logo.png"
      width={120}
      height={100} 
      className={`2xl:ml-52 md:max-w-[180px]  max-sm:h-[85px] max-sm:w-[120px] ${classNameAdd}`}
      alt="logo"
      priority
    />
  );
};

export default Logo;
