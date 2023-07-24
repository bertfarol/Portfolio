import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button";

export default function ArtGallery() {
  return (
    <Layout
      title="Art Gallery Website"
      description="Art Gallery Showcase: A Digital Platform for Artistic Expression"
      image="/portfolio/espacio-manila/ogimage.png"
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
                Espacio Manila Gallery
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Transforming the Art Gallery Website with NextJS and Enhanced
                Features
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="mb-4 leading-relaxed">
                I have recently undertaken a revamp of the original website that
                I initially developed using WordPress. Now, I have taken it a
                step further by leveraging Next.js to enhance the website's
                visual appeal and optimize its performance for faster loading
                times, especially crucial for high-quality artwork images. It's
                worth noting that I am also the one who originally created the
                WordPress site.
              </p>
              <p className="leading-relaxed">
                You can view the primary website here: <br />
                <a
                  href="https://espaciomanilagallery.com/"
                  className="underline text-accent-blue hover:no-underline"
                  target="_blank"
                >
                  https://espaciomanilagallery.com/
                </a>
              </p>
              <p className="mt-8 leading-relaxed">
                You can view the <em>revamped website</em> here:
              </p>
              <div className="flex mt-6">
                <PrimaryButton
                  href="https://espacio-manila.vercel.app/"
                  icon="formkit:arrowright"
                  target="_blank"
                >
                  View Espacio Manila
                </PrimaryButton>
              </div>
              <div className="mt-8 lg:mt-16">
                <p className="text-sm text-slate-500">Technologies:</p>
                <ul className="flex flex-wrap gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:nextjs-icon" className="w-6 h-6" />
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="skill-icons:typescript" className="w-6 h-6" />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:tailwindcss" className="w-6 h-6" />
                    <span>tailwindcss</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Hosting platform:</p>
                <div className="flex items-center gap-2 mt-2 text-base">
                  <Icon icon="devicon:vercel" className="w-6 h-6" />
                  <span>Vercel</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Design Tools:</p>
                <ul className="flex flex-wrap gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:figma" className="w-6 h-6" />
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="skill-icons:photoshop" className="w-6 h-6" />
                    <span>Photoshop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#f5f5f5]">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              Web Design
            </h1>
            <div className="mt-10 xl:columns-3 gap-x-10 columns-1 md:columns-2">
              {/* contianer */}
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/homepage.png"
                  width="1920"
                  height="4220"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/artworks-page.png"
                  width="1920"
                  height="1740"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/artwork-single-page.png"
                  width="1920"
                  height="947"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/artwork-view-in-room.png"
                  width="1920"
                  height="947"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/exhibitions-page.png"
                  width="1920"
                  height="1986"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/exhibition-single-page.png"
                  width="1920"
                  height="1809"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/espacio-manila/contact-page.png"
                  width="1920"
                  height="1611"
                  alt="Espacio Manila Gallery"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              {/* end**contianer */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
