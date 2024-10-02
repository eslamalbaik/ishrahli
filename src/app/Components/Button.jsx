import Link from 'next/link'

const Button = ({textinner,nameLink,icon="",ClassNameAdd=""}) => {
  return (
    <Link href={`${nameLink}`}>
        <button className={`${ClassNameAdd} bg-[--foreground] flex justify-center items-center text-white px-6 text-[16px] py-4 hover:shadow-xl transition-all  hover:bg-[--background] rounded-lg`}>
            {textinner}{icon}
        </button> 
        </Link>
  )
}

export default Button