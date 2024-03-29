import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button";

export default function ApplabClone() {
  return (
    <Layout
      title="Applab Landing Page"
      description="Showcase of my skills in cloning and translating designs into functional HTML using Bootstrap."
      image="/applab-ogimage.jpg"
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
              <li className="text-slate-500">Applab</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Landing Page</p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Applab
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Bringing Ideas to Life with Bootstrap
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="leading-relaxed">
                Showcase of my skills in cloning and translating designs into
                functional HTML using Bootstrap. With a keen eye for detail and
                a passion for web development, I&apos;ve utilized
                Bootstrap&apos;s responsive components and styling to adapt
                designs seamlessly to the web. This repository serves as
                evidence of my ability to transform visual concepts into
                interactive and user-friendly experiences. Explore the projects
                and witness how I leverage Bootstrap&apos;s powerful features to
                bring ideas to life.
              </p>
              <div className="flex mt-6 lg:mt-14">
                <PrimaryButton
                  href="https://bertfarol.github.io/applab-bootstrap/"
                  icon="formkit:arrowright"
                  target="_blank"
                >
                  View Applab
                </PrimaryButton>
              </div>
              <div className="mt-8 lg:mt-16">
                <p className="text-sm text-slate-500">Technologies:</p>
                <ul className="flex flex-wrap gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="vscode-icons:file-type-html"
                      className="w-6 h-6"
                    />
                    <span>HTML5</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:css3" className="w-6 h-6" />
                    <span>CSS3</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="skill-icons:bootstrap" className="w-6 h-6" />
                    <span>Bootstrap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:javascript" className="w-6 h-6" />
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:jquery" className="w-6 h-6" />
                    <span>JQuery</span>
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

        <section className="py-8 lg:py-36 bg-[#f5f5f5]">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            {/* contianer */}
            <h2 className="text-4xl font-semibold">Applab</h2>
            <div className="mt-10">
              <div className="py-4">
                <Image
                  src="/portfolio/applab/homepage.png"
                  width="1356"
                  height="7273"
                  alt="Twitter Clone App"
                  className="rounded-lg shadow-gallery"
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
