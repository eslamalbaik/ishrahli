import Link from 'next/link'

const ButtonOutline = ({textinner,nameLink,ClassNameAdd=""}) => {
  return (
    <Link href={`${nameLink}`}>
        <button className={`${ClassNameAdd}  text-[--background] border-2 border-[--background] px-6 text-[16px] py-4 hover:shadow-xl transition-all  hover:bg-[--background] rounded-lg`}>
            {textinner} 
        </button> 
        </Link>
  )
}

export default ButtonOutline