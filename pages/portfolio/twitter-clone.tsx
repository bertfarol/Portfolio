import { PrimaryButton } from "@/components/Button";
import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";


export default function TwitterClone() {
  return (
    <Layout
      title="Twitter Clone App"
      description=" I developed this Twitter clone web application not merely as a replication of the existing platform, but rather as a means to gain a deeper understanding of its development process while showcasing my skills and knowledge in Next.js."
      image="/twitterclone-ogimage.jpg"
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
              <li className="text-slate-500">Twitter Clone App</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Web Application</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Twitter Clone App
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Transforming the Art Gallery Website with NextJS and Enhanced
                Features
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="leading-relaxed">
                I developed this Twitter clone web application not merely as a
                replication of the existing platform, but rather as a means to
                gain a deeper understanding of its development process while
                showcasing my skills and knowledge in Next.js. Throughout this
                journey, I delved into fetching real-time API data and
                implementing features like user authentication using NextAuth.
                Additionally, I explored the utilization of CMS platforms like
                Sanity.io to manage content. Although this Twitter clone is not
                fully functional, it serves as a testament to my ability to
                construct web applications with similar complexity, highlighting
                my proficiency and expertise in web development.
              </p>
              <div className="flex mt-6 lg:mt-14">
                <PrimaryButton
                  href="https://twitter-clone-app-farol.vercel.app/"
                  icon="formkit:arrowright"
                  target="_blank"
                >
                  View Twitter Clone App
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
                    <div className="w-6 h-6">
                      <Image
                        src="/tech-icon/next-auth.png"
                        width="65"
                        height="72"
                        alt="nextAuth"
                      />
                    </div>
                    <span>NextAuth.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:swr" className="w-10 h-6" />
                    <span>SWR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="skill-icons:typescript" className="w-6 h-6" />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:tailwindcss" className="w-8 h-6" />
                    <span>tailwindcss</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:sanity" className="w-16 h-6" />
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
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#40C1F1]">
          <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
            {/* contianer */}
            <div id="home">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Twitter App
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/twitter-clone/twitter_login.jpg"
                  width="1920"
                  height="947"
                  alt="Twitter Clone App"
                />
              </div>
              <div className="mt-8">
                <Image
                  src="/portfolio/twitter-clone/twitter-app.jpg"
                  width="1216"
                  height="917"
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
