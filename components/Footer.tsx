import { Icon } from '@iconify/react';
import React from 'react'

export const Footer = () => {
  return (
    <div className="pb-4 pt-14 lg:pt-36 lg:pb-6 lg:bg-[url('/blur_contact.png')] bg-no-repeat bg-center-top">
      <div className="max-w-lg px-4 pb-12 mx-auto lg:pb-60">
        <p className="text-[#0D99FF]">Contact</p>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
          Let&#39;s Discuss Your Project
        </h2>
        <div className="pt-2 mt-12 border-t border-black lg:border-t-2 sm:pt-4 sm:flex sm:items-center sm:gap-3 lg:gap-6">
          <div className="hidden sm:flex bg-black rounded-full h-[58px] w-[58px] items-center justify-center group">
            <Icon
              icon="fluent:chat-12-filled"
              className="text-white duration-300 h-7 w-7"
            />
          </div>
          <div>
            <span className="inline-block mb-0.5 text-sm lg:mb-1 text-black/70">
              Email
            </span>
            <p className="text-lg font-semibold md:text-h4">
              efarolcamposano@gmail.com
            </p>
          </div>
        </div>
        <div className="pt-2 mt-6 border-t border-black lg:border-t-2 sm:pt-4 sm:flex sm:items-center sm:gap-3 lg:gap-6">
          <div className="hidden sm:flex bg-black rounded-full h-[58px] w-[58px] items-center justify-center group">
            <Icon
              icon="mdi:location"
              className="text-white duration-300 h-7 w-7"
            />
          </div>
          <div>
            <span className="inline-block mb-0.5 text-sm lg:mb-1 text-black/70">
              Location
            </span>
            <p className="text-lg font-semibold md:text-h4">
              Las Piñas City, Philippines
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="justify-between pt-2 border-t border-black lg:pt-4 sm:flex lg:borde-t-2">
          <p className="font-medium">©2023 All Right Reserved</p>
          <p className="font-medium">efarolcamposano@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
