import { Icon } from "@iconify/react";

export default function Experience() {
  return (
    <section className="pt-14 pb-8  lg:pt-36 lg:pb-24  lg:bg-[url('/blur_skills.png')] bg-no-repeat bg-left-top">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="lg:flex lg:justify-between">
          <div className="lg:max-w-h2">
            <p className="text-[#0D99FF]">Experience</p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
              Skills & Experience
            </h2>
            <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
              Inspired by Design and Code: Transforming Ideas into Interactive
              Web Solutions as a Front-End Developer
            </p>
            <div className="flex mt-6 lg:mt-14">
              <a
                href="/resume.pdf"
                target="_blank"
                className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
              >
                Download Resume
                <Icon
                  icon="material-symbols:download"
                  className="hidden w-5 h-5 sm:inline-block"
                />
              </a>
            </div>
          </div>
          <div className="lg:max-w-[591px] w-full lg:ml-12">
            <h3 className="mt-12 text-3xl font-semibold lg:mt-0 xl:text-h3">
              Experience
            </h3>
            <div className="flex pt-2 mt-8 border-t border-black lg:mt-12 lg:pt-5 lg:border-t-2">
              <span className="text-sm">May 2022 - Present</span>
              <div className="pl-4 sm:pl-9">
                <div className="text-lg font-semibold md:text-h4">
                  Freelance Front-End Developer
                </div>
                <span className="inline-block mt-3 text-sm text-black/70">
                  Espacio Manila
                </span>
              </div>
            </div>
            <div className="flex pt-2 mt-8 border-t border-black lg:pt-5 lg:border-t-2">
              <span className="text-sm">Jan 2022 - Apr 2022</span>
              <div className="pl-4 sm:pl-9">
                <div className="text-lg font-semibold md:text-h4">
                  Freelance Front-End Developer
                </div>
                <span className="inline-block mt-3 text-sm text-black/70">
                  Brunchmateph
                </span>
              </div>
            </div>
            <div className="flex pt-2 mt-8 border-t border-black lg:pt-5 lg:border-t-2">
              <span className="text-sm">Jan 2021 - May 2021</span>
              <div className="pl-4 sm:pl-9">
                <div className="text-lg font-semibold md:text-h4">
                  Front-End Developer
                </div>
                <span className="inline-block mt-3 text-sm text-black/70">
                  Oost&Voort Inc.
                </span>
              </div>
            </div>
            <div className="flex pt-2 mt-8 border-t border-black lg:pt-5 lg:border-t-2">
              <span className="text-sm">Jun 2017 - Mar 2020</span>
              <div className="pl-4 sm:pl-9">
                <div className="text-lg font-semibold md:text-h4">
                  Front-End Developer
                </div>
                <span className="inline-block mt-3 text-sm text-black/70">
                  Transcosmos Asia Philippines
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-semibold xl:text-h3">Skills</h3>
          {/* List of skills */}
          <div className="grid gap-2 mt-4 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">Front-End Technologies:</p>
              <p className="font-semibold">HTML, CSS, JavaScript, TypeScript</p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">CSS Framework & Pre-processor: </p>
              <p className="font-semibold">Bootstrap, Tailwind CSS, SASS</p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">JavaScript Framework & Library:</p>
              <p className="font-semibold">React JS, Next JS</p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">Responsive Design: </p>
              <p className="font-semibold">
                Media queries, fluid layouts, mobile-first development
              </p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">Version Control: </p>
              <p className="font-semibold">Git, GitHub</p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">Design Tools: </p>
              <p className="font-semibold">Adobe Photoshop, Figma</p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">Testing and Debugging: </p>
              <p className="font-semibold">
                Cross-browser compatibility, DevTools, testing frameworks
              </p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">
                Web Hosting and Server Management:
              </p>
              <p className="font-semibold">
                cPanel, Hpanel, DNS Management, SSL, Email Configuration
              </p>
            </div>
            <div className="text-sm py-2 px-3.5  border-l-2 border-accent-blue shadow-3xl lg:shadow-4xl">
              <p className="text-black/80">CMS & Plugins:</p>
              <p className="font-semibold">
                WordPress, Elementor, WooCommerce, Shopify (Liquid)
              </p>
            </div>
          </div>
          {/* end**List of skills */}
        </div>
      </div>
    </section>
  );
}
