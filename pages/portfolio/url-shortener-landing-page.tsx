import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function UrlShortner() {
  return (
    <Layout
      title="URL Shortener Landing Page"
      description="I specialize in building impactful landing pages for innovative products and services, including URL Shorteners."
      image="/urlshortener-ogimage.jpg"
    >
      <main>
        <section className="pb-8 lg:pb-36">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <ul className="flex gap-1 py-10 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-accent-blue">
                  Home
                </Link>{" "}
                /
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent-blue">
                  Portfolio
                </Link>{" "}
                /
              </li>
              <li className="text-slate-500">URL Shortener Landing Page</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Landing Page</p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                URL Shortener: The Power of Concise Links
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Transforming Long URLs into Short, Memorable, and Shareable
                Links
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="leading-relaxed">
                I specialize in building impactful landing pages for innovative
                products and services, including URL Shorteners. With a focus on
                minamilist design and intuitive user interfaces, I create
                landing page that effectively showcase the power of URL
                shortening. By transforming long and complex links into concise,
                memorable, and shareable URLs, I demonstrate the value of
                improved readability and simplified content sharing. Explore my
                portfolio to see examples of my work, and let&apos;s collaborate
                to create a visually appealing URL Shortener landing page that
                effectively presents your product and captivates your audience.
              </p>
              <div className="flex mt-6 lg:mt-14">
                <a
                  href="https://bertfarol.github.io/nextjs-url-shortener/"
                  target="_blank"
                  className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
                >
                  View URL Shortener
                  <Icon
                    icon="formkit:arrowright"
                    className="hidden w-5 h-5 -rotate-45 sm:inline-block"
                  />
                </a>
              </div>
              <div className="mt-8 lg:mt-16">
                <p className="text-sm text-slate-500">Technologies:</p>
                <ul className="flex flex-wrap gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:nextjs-icon" className="w-6 h-6" />
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:tailwindcss" className="w-8 h-6" />
                    <span>tailwindcss</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Hosting platform:</p>
                <div className="flex items-center gap-2 mt-2 text-base">
                  <Icon icon="ri:github-fill" className="w-6 h-6" />
                  <span>GitHub Pages</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#1C2745]">
          <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
            {/* contianer */}
            <div id="home">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                URL Shortener
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/url-shortener/landing-page.png"
                  width="1920"
                  height="2070"
                  alt="Twitter Clone App"
                />
              </div>
            </div>

            {/* end**contianer */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
