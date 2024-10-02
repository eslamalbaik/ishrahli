"use client"; // Add this to mark the component as a Client Component

import Link from 'next/link';

const DropdownMenu = ({ nameDropdown, items }) => {
  return (
    <div className="dropdown inline-block relative">
      <button className="inline-flex items-center">
        <span className="mr-1 ml-1">{nameDropdown}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="dropdown-menu shadow-xl absolute hidden text-black pt-1">
        {items?.map((item) => (
          <li key={item.id}>
            <Link
              className="rounded-t z-10 w-52 text-base px-4 bg-white hover:bg-[--foreground] hover:text-white py-2 block whitespace-no-wrap"
              href={"/" + item.link}
            >
              {item.namechildern}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .dropdown:hover .dropdown-menu {
          display: block;
        }

        @media (max-width: 640px) {
          .dropdown {
            display: block;
          }
          .dropdown-menu {
            position: static;
          }
          .dropdown-menu li {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
