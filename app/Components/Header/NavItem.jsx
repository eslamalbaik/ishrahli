import Link from "next/link";
const NavItem = ({ link, children, onClick,AddclassName="" }) => {
  return (
    <li className= {`cursor-pointer hover:text-[--foreground] ${AddclassName}`} onClick={onClick}>
      <Link className="relative block" href={link}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;