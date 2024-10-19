import Link from 'next/link'

const ButtonOutline = ({textinner,nameLink,icon="",ClassNameAdd=""}) => {
  return (
    <Link href={`${nameLink}`}>
        <button className={`${ClassNameAdd}  flex justify-center items-center  text-[--background] border-2 border-[--background]  text-[16px]  hover:shadow-xl transition-all  hover:bg-[--background] rounded-lg`}>
            {textinner} 
            {icon}
        </button> 
        </Link>
  )
}

export default ButtonOutline