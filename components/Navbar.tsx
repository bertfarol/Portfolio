import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", target: "_self" },
    { name: "Portfolio", path: "/portfolio", target: "_self" },
    { name: "Resume", path: "/resume.pdf", target: "_blank" },
    { name: "Contact", path: "#contact", target: "_self" },
  ];

  // exclude home link to desktop
  const desktopLinks = navLinks.slice(1);

  // Mobile menu
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
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                target={link.target}
                className="text-2xl p-5 border-y border-[#f3f3f3] block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <header className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between px-5 h-[68px]">
        <div>
          <Link href="/" className="font-semibold">
            <Image src="/logo-transparent.svg" height={19.85} width={49.69} alt="engelbert farol" />
          </Link>
        </div>
        <div className="hidden gap-2 text-sm font-medium lg:flex">
          {/* Desktop menu */}
          {desktopLinks.map((link) => (
            <Link
              href={link.path}
              target={link.target}
              className={`${
                router.pathname === link.path ? "text-accent-blue" : ""
              } p-3 hover:text-accent-blue`}
            >
              {link.name}
            </Link>
          ))}
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
