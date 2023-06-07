import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between px-5 h-[68px]">
        <div>
          <span className="text-base font-semibold">
            engelbert<span className="text-[#0D99FF] text-xl px-0.5">.</span>farol
          </span>
        </div>
        <div className="hidden lg:flex gap-2 text-sm ">
          <Link href="#" className="p-3">
            About
          </Link>
          <Link href="#" className="p-3">
            Service
          </Link>
          <Link href="#" className="p-3">
            Portfolio
          </Link>
          <Link href="#" className="p-3">
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  );
};
