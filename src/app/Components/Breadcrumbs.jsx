import Link from 'next/link'

const Breadcrumbs = ({ links, separator = ' / ', hoverClass  }) => {
  return (
    <div className="flex">
    {links.map((link, index) => (
      <div key={index}>
        <Link
          href={link.href}
          className={`hover:text-[--background] hover:border-b-2 hover:border-[--background] ${hoverClass}`}>
          {link.label}
        </Link>
        {index < links.length - 1 && separator}
      </div>
    ))}
  </div>
  )
}

export default Breadcrumbs