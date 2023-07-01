import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mobileNav = () => {
    return (
      <div className="fixed top-0 left-0 z-10 w-full h-full gap-2 text-lg font-medium bg-white">
        <ul>
          <li className="flex items-center justify-end p-5">
            <Icon
              icon="iconamoon:close-light"
              className="w-8 h-8"
              onClick={toggleMenu}
            />
          </li>
          <li>
            <Link
              href="/"
              className="text-2xl p-5 border-y border-[#f3f3f3] block"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className="text-gray-400 font-normal cursor-not-allowed text-2xl p-5 border-b border-[#f3f3f3] block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-400 font-normal cursor-not-allowed text-2xl p-5 border-b border-[#f3f3f3] block"
            >
              Service
            </Link>
          </li> */}
          <li>
            <Link
              href="/portfolio"
              className="text-2xl p-5 border-b border-[#f3f3f3] block"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/resume.pdf"
              className="text-2xl p-5 border-b border-[#f3f3f3] block"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <header className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between px-5 h-[68px]">
        <div>
          <Link href="/">
            <Image
              height="45"
              width="45"
              src="/e-icon.svg"
              alt="engelbert farol"
            />
          </Link>
        </div>
        <div className="hidden gap-2 text-sm font-medium lg:flex">
          {/* <Link href="#" className="p-3 text-gray-400 cursor-not-allowed">
            About
          </Link>
          <Link href="#" className="p-3 text-gray-400 cursor-not-allowed">
            Service
          </Link> */}
          <Link href="/portfolio" className="p-3 hover:text-accent-blue">
            Portfolio
          </Link>
          <Link href="/resume.pdf" className="p-3 hover:text-accent-blue" target="_blank">
            Resume
          </Link>
        </div>
        <Icon
          icon="clarity:menu-line"
          className=" w-7 h-7 lg:hidden"
          onClick={toggleMenu}
        />
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && mobileNav()}
    </header>
  );
};
