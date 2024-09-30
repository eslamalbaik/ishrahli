import Link from 'next/link'

const Button = ({textinner,nameLink,ClassNameAdd=""}) => {
  return (
    <Link href={`${nameLink}`}>
        <button className={`${ClassNameAdd}  text-white px-6 text-[16px] py-4 hover:shadow-xl transition-all  hover:bg-[--background] rounded-lg`}>
            {textinner} 
        </button> 
        </Link>
  )
}

export default Button