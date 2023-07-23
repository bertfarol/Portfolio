import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "../../components/Button";

export default function Projects() {
  return (
    <section className="pb-8 bg-black pt-14 lg:pt-36 lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="lg:max-w-h2">
            <p className="text-[#0D99FF]">Project</p>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-h2">
              Latest Projects
            </h2>
          </div>
          <SecondaryButton href="/portfolio" icon="formkit:arrowright">
            View All Projects
          </SecondaryButton>
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
                src="/portfolio/espacio-manila/thumbnail.jpg"
                width="800"
                height="800"
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
                src="/portfolio/twitter-clone/thumbnail_01.jpg"
                width="800"
                height="800"
                alt="Twitter clone app"
              />
            </div>
          </Link>
          <Link
            href="/portfolio/group-chat-messenger"
            className="pt-2 mt-12 text-white border-t border-white group lg:pt-5"
          >
            <h3 className="text-3xl font-semibold duration-300 xl:text-h3 group-hover:text-accent-blue">
              Group Chat Messenger
            </h3>
            <span className="inline-block mt-3 text-sm">Web application</span>
            <div className="relative mt-6 after:content-[''] lg:after:h-[260px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black  after:duration-300 after:to-black/0 group-hover:after:h-0 duration-300">
              <Image
                src="/portfolio/realtime-group-chat/thumbnail.jpg"
                width="800"
                height="800"
                alt="Group Chat"
              />
            </div>
          </Link>
        </div>
        {/* end** List of projects */}
      </div>
    </section>
  );
}
