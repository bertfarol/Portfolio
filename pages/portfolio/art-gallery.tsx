import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function ArtGallery() {
  return (
    <Layout
      title="Art Gallery Website"
      description="Art Gallery Showcase: A Digital Platform for Artistic Expression"
      image="/espacio-ogimage.jpg"
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
              <li className="text-slate-500">Art Gallery Webiste</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Portfolio and Business Website</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Espacio Manila Gallery: Redefining Art Experiences Online
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Transforming the Art Gallery Website with NextJS and Enhanced
                Features
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="mb-4 leading-relaxed">
                Espacio Manila Gallery is a redesigned art gallery website that
                I have built using Next.js. This new version showcases a
                remarkable transformation compared to the previous design. The
                website exhibits exceptional speed and performance, ensuring a
                seamless browsing experience for visitors. To visit the existing
                website, you can still access the old version at{" "}
                <Link
                  href="https://espaciomanilagallery.com/"
                  className="underline text-accent-blue hover:no-underline"
                  target="_blank"
                >
                  https://espaciomanilagallery.com/
                </Link>
                .
              </p>
              <p className="leading-relaxed">
                While the website is currently in its prototype stage, it
                demonstrates the exciting possibilities for Espacio Manila
                Gallery in the digital world. The minimalist design I
                implemented puts the focus on the vibrant artwork, allowing it
                to truly shine. Visitors can explore carefully curated
                exhibitions, discover talented artists, and appreciate the
                stunning imagery that showcases the gallery&apos;s exceptional art
                collection. Although the new website is not yet live, you can
                still visit the existing website via the provided link to catch
                a glimpse of the gallery&apos;s offerings and immerse yourself in its
                artistic ambiance.
              </p>
              <div className="flex mt-6 lg:mt-14">
                <Link
                  href="https://espacio-manila.vercel.app/"
                  target="_blank"
                  className="bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/80 text-white font-bold text-sm px-4 py-3.5 rounded-lg w-full sm:w-auto justify-center"
                >
                  View Espacio Manila
                  <Icon
                    icon="formkit:arrowright"
                    className="hidden w-5 h-5 sm:inline-block"
                  />
                </Link>
              </div>
              <div className="mt-8 lg:mt-16">
                <p className="text-sm text-slate-500">Technology:</p>
                <ul className="flex gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="logos:nextjs-icon"
                      className="hidden w-6 h-6 sm:inline-block"
                    />
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="skill-icons:typescript"
                      className="hidden w-6 h-6 sm:inline-block"
                    />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="devicon:tailwindcss"
                      className="hidden w-6 h-6 sm:inline-block"
                    />
                    <span>tailwindcss</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Hosting platform:</p>
                <div className="flex items-center gap-2 mt-2 text-base">
                  <Icon
                    icon="devicon:vercel"
                    className="hidden w-6 h-6 sm:inline-block"
                  />
                  <span>Vercel</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Website pages:</p>
                <ul className="flex gap-4 mt-2 text-base text-accent-blue">
                  <li>
                    <a href="#home" className=" hover:underline">
                      #Homepage
                    </a>
                  </li>
                  <li>
                    <a href="#artworks" className=" hover:underline">
                      #Artworks page
                    </a>
                  </li>
                  <li>
                    <a href="#exhibitions" className=" hover:underline">
                      #Exhibitions page
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className=" hover:underline">
                      #Contact page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#504d3d]">
          <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
            {/* contianer */}
            <div id="home">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Homepage
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/espacio-manila/homepage.png"
                  width="1920"
                  height="4220"
                  alt="Espacio Manila Gallery"
                />
              </div>
            </div>

            <div id="artworks" className="mt-10 lg:mt-16">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Artworks Page
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/espacio-manila/artwork-page.png"
                  width="1920"
                  height="1740"
                  alt="Espacio Manila Gallery"
                />
              </div>
              <div className="mt-6">
                <Image
                  src="/portfolio/espacio-manila/artwork-single-page.png"
                  width="1920"
                  height="947"
                  alt="Espacio Manila Gallery"
                />
              </div>
              <div className="mt-6">
                <Image
                  src="/portfolio/espacio-manila/artwork-view-in-room.png"
                  width="1920"
                  height="947"
                  alt="Espacio Manila Gallery"
                />
              </div>
            </div>

            <div id="exhibitions" className="mt-10 lg:mt-16">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Exhibitions Page
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/espacio-manila/exhibitions-page.png"
                  width="1920"
                  height="1986"
                  alt="Espacio Manila Gallery"
                />
              </div>
              <div className="mt-6">
                <Image
                  src="/portfolio/espacio-manila/exhibition-single-page.png"
                  width="1920"
                  height="1809"
                  alt="Espacio Manila Gallery"
                />
              </div>
            </div>

            <div id="contact" className="mt-10 lg:mt-16">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Contact Page
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/espacio-manila/contact-page.png"
                  width="1920"
                  height="1611"
                  alt="Espacio Manila Gallery"
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
