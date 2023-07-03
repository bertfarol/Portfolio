import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  href: string;
  icon: string;
  target?: string;
}

export const PrimaryButton = ({
  children,
  href,
  icon,
  target = "_self",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
    >
      {children}
      <Icon
        icon={icon}
        className={`${
          target === "_blank" ? "-rotate-45" : ""
        } hidden w-5 h-5 sm:inline-block`}
      />
    </Link>
  );
};



export const SecondaryButton = ({ children, href, icon }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="rounded text-accent-blue flex items-center gap-2 text-sm w-fit lg:p-2 duration-300 font-bold mt-8 hover:bg-[#0e0e0e]"
    >
      {children}
      <Icon icon={icon} className="w-5 h-5" />
    </Link>
  );
};
