import { Icon } from "@iconify/react";

export default function Services() {
  return (
    <section className="pt-14 pb-8  lg:pt-36 lg:pb-24 bg-black  lg:bg-[url('/blur_services.png')] bg-no-repeat bg-left-top">
      <div className="px-4 mx-auto max-w-7xl lg:flex lg:justify-between md:px-8 ">
        {/* --headline */}
        <div className="flex flex-col lg:justify-between">
          <div className="lg:max-w-h2">
            <p className="text-[#0D99FF]">Service</p>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-h2">
              Services I Offer
            </h2>
            <p className="text-white/80 mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-white lg:after:h-[2px] after:w-7 lg:pl-[57px]">
              Helping ambitious businesses succeed online by boosting profits
              through engaging front-end solutions.
            </p>
          </div>
          {/* <a
          href="#"
          className="rounded text-accent-blue flex items-center gap-2 text-sm w-fit lg:p-2 duration-300 font-bold mt-8 hover:bg-[#0e0e0e]"
        >
          View All Services
          <Icon icon="formkit:arrowright" className="w-5 h-5" />
        </a> */}
        </div>
        {/* List of services */}
        <div className="mt-12 lg:mt-0">
          <div className="border-t border-white">
            <a
              href="#"
              className="text-white flex pt-2 hover:bg-[#222222]/30 duration-300 pb-12 group"
            >
              <span className="pt-1 lg:pt-3">01/</span>
              <div className="pl-4 grow">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[53px] xl:leading-[64px] font-medium w-4/5 group-hover:text-accent-blue duration-300">
                  Web Development &amp; Design
                </div>
                <div className="flex items-center justify-between mt-4 text-sm duration-300">
                  <p>Explore</p>
                  <div className="flex items-center justify-center p-3 rounded-full bg-accent-blue xl:p-4">
                    <Icon
                      icon="formkit:arrowright"
                      className="w-5 h-5 xl:h-6 xl:w-6"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="border-t border-white">
            <a
              href="#"
              className="text-white flex pt-2 hover:bg-[#222222]/30 duration-300 pb-12 group"
            >
              <span className="pt-1 lg:pt-3">02/</span>
              <div className="pl-4 grow">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[53px] xl:leading-[64px] font-medium w-4/5 group-hover:text-accent-blue duration-300">
                  E-commerce Development
                </div>
                <div className="flex items-center justify-between mt-4 text-sm duration-300">
                  <p>Explore</p>
                  <div className="flex items-center justify-center p-3 rounded-full bg-accent-blue xl:p-4">
                    <Icon
                      icon="formkit:arrowright"
                      className="w-5 h-5 xl:h-6 xl:w-6"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="border-t border-white">
            <a
              href="#"
              className="text-white flex pt-2 hover:bg-[#222222]/30 duration-300 pb-12 group"
            >
              <span className="pt-1 lg:pt-3">03/</span>
              <div className="pl-4 grow">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[53px] xl:leading-[64px] font-medium w-4/5 group-hover:text-accent-blue duration-300">
                  Web Maintenance &amp; Updates
                </div>
                <div className="flex items-center justify-between mt-4 text-sm duration-300">
                  <p>Explore</p>
                  <div className="flex items-center justify-center p-3 rounded-full bg-accent-blue xl:p-4">
                    <Icon
                      icon="formkit:arrowright"
                      className="w-5 h-5 xl:h-6 xl:w-6"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* end**List of services */}
      </div>
    </section>
  );
}
