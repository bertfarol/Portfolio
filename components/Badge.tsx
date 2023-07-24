import React, { ReactNode } from 'react'

interface BadgeProp {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProp) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10">
      {children}
    </span>
  );
}