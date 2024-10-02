import Image from 'next/image'
const Logo = () => {
  return (
    <Image
    src="/images/logo.png"
    width={140}
    height={100}
    className="md:h-[100px] max-sm:h-[55px] max-sm:w-[80px]"
    alt="logo"
    priority 
  />
  )
}

export default Logo