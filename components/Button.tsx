import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  href: string;
  icon: string;
}

export const PrimaryButton = ({ children, href, icon }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
    >
      {children}
      <Icon icon={icon} className="hidden w-5 h-5 sm:inline-block" />
    </Link>
  );
};
