import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout
      title="Portfolio - Engelbert Farol"
      description="Creating User-Friendly and Captivating Websites"
      image="/home-ogimage.jpg"
    >
      {/* Hero */}
      <section className="overflow-hidden relative pt-16 lg:pt-40 pb-36 lg:bg-[url('/blur_hero.png')] bg-no-repeat bg-center-top">
        <div className="px-4 mx-auto text-center max-w-7xl md:px-8">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h1">
            Creating User-Friendly and Captivating Websites
          </h1>
          <p className="max-w-sm mx-auto mt-6 text-base font-normal text-black/80">
            Hi, I&#39;m Bert, a Front-End Developer dedicated to transforming
            ideas into captivating digital solutions.
          </p>
          <div className="flex justify-center mt-6 lg:mt-14">
            <Link
              href="/portfolio"
              className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
            >
              View Portfolio
              <Icon
                icon="formkit:arrowright"
                className="hidden w-5 h-5 sm:inline-block"
              />
            </Link>
          </div>
          <p className="mt-20 text-sm text-black/70 lg:mt-28">Check Out My</p>
          <div className="flex gap-4 mx-auto mt-6 lg:gap-6 lg:mt-10 w-fit">
            <a
              href="https://github.com/bertfarol"
              target="_blank"
              className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
            >
              <Icon
                icon="ri:github-fill"
                className="duration-300 h-7 w-7 group-hover:text-accent-blue"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/efarol/"
              className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
            >
              <Icon
                icon="uil:linkedin"
                className="duration-300 h-7 w-7 group-hover:text-accent-blue"
              />
            </a>
            <a
              target="_blank"
              href="https://www.behance.net/efarolcamp7bd0"
              className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
            >
              <Icon
                icon="ant-design:behance-square-outlined"
                className="duration-300 h-7 w-7 group-hover:text-accent-blue"
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full position">
          <div className="flex justify-center max-w-screen-xl mx-auto lg:justify-between">
            <div className="hidden lg:flex gap-14">
              <Icon
                icon="devicon:css3"
                className="h-[60px] w-[60px] hero-icon01"
              />
              <Icon
                icon="skill-icons:figma-light"
                className="h-[60px] w-[60px] hero-icon02"
              />
              <Icon
                icon="vscode-icons:file-type-html"
                className="h-[60px] w-[60px] hero-icon03"
              />
              <Icon
                icon="devicon:tailwindcss"
                className="h-[60px] w-[60px] hero-icon04"
              />
            </div>
            <div className="flex gap-11 md:gap-14">
              <Icon
                icon="skill-icons:react-dark"
                className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon03"
              />
              <Icon
                icon="devicon:vscode"
                className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon04"
              />
              <Icon
                icon="logos:javascript"
                className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon01"
              />
              <Icon
                icon="devicon:nextjs"
                className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon02"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END** Hero */}

      {/* Services*/}
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
      {/*END** Services */}

      {/* Skills & Experience */}
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
                <p className="font-semibold">
                  HTML, CSS, JavaScript, TypeScript
                </p>
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
      {/*END** Skills & Experience */}

      {/* Latest Projects */}
      <section className="pb-8 bg-black pt-14 lg:pt-36 lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl md:px-8">
          <div className="lg:flex lg:justify-between lg:items-start">
            <div className="lg:max-w-h2">
              <p className="text-[#0D99FF]">Project</p>
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-h2">
                Latest Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="rounded text-accent-blue flex items-center gap-2 text-sm w-fit lg:p-2 duration-300 font-bold mt-8 hover:bg-[#0e0e0e]"
            >
              View All Projects
              <Icon icon="formkit:arrowright" className="w-5 h-5" />
            </Link>
          </div>
          {/* List of projects */}
          <div className="grid sm:grid-cols-2 sm:gap-6 lg:gap-10 md:grid-cols-3">
            <Link
              href="/portfolio/art-gallery"
              className="pt-2 mt-12 text-white border-t border-white group lg:pt-5"
            >
              <h3 className="text-3xl font-semibold duration-300 group-hover:text-accent-blue xl:text-h3">
                Espacio Manila
              </h3>
              <span className="inline-block mt-3 text-sm">
                Portfolio and Business Website
              </span>
              <div className="relative mt-6 after:content-[''] lg:after:h-[260px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black  after:duration-300 after:to-black/0 group-hover:after:h-0 duration-300">
                <Image
                  src="/portfolio/espacio-manila/cover.jpg"
                  width="1000"
                  height="750"
                  alt="Espacio Manila Gallery"
                />
              </div>
            </Link>
            <Link
              href="/portfolio/twitter-clone"
              className="pt-2 mt-12 text-white border-t border-white group lg:pt-5"
            >
              <h3 className="text-3xl font-semibold duration-300 xl:text-h3 group-hover:text-accent-blue">
                Twitter Clone
              </h3>
              <span className="inline-block mt-3 text-sm">Web application</span>
              <div className="relative mt-6 after:content-[''] lg:after:h-[260px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black  after:duration-300 after:to-black/0 group-hover:after:h-0 duration-300">
                <Image
                  src="/portfolio/twitter-clone/cover2.jpg"
                  width="1000"
                  height="750"
                  alt="Twitter clone app"
                />
              </div>
            </Link>
            <Link
              href="/portfolio/url-shortener-landing-page"
              className="pt-2 mt-12 text-white border-t border-white group lg:pt-5"
            >
              <h3 className="text-3xl font-semibold duration-300 xl:text-h3 group-hover:text-accent-blue">
                URL Shortener
              </h3>
              <span className="inline-block mt-3 text-sm">Landing Page</span>
              <div className="relative mt-6 after:content-[''] lg:after:h-[260px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black  after:duration-300 after:to-black/0 group-hover:after:h-0 duration-300">
                <Image
                  src="/portfolio/url-shortener/cover.jpg"
                  width="1000"
                  height="750"
                  alt="Espacio Manila Gallery"
                />
              </div>
            </Link>
          </div>
          {/* end** List of projects */}
        </div>
      </section>
      {/*END** Latest Projects */}
    </Layout>
  );
}
