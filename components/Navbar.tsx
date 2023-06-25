import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
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
          <Link href="#" className="p-3 hover:text-accent-blue">
            About
          </Link>
          <Link href="#" className="p-3 hover:text-accent-blue">
            Service
          </Link>
          <Link href="/portfolio" className="p-3 hover:text-accent-blue">
            Portfolio
          </Link>
          <Link href="#" className="p-3 hover:text-accent-blue">
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  );
};
