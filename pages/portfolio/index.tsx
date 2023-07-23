import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface BadgeProp {
  children: ReactNode;
}
export function Badge({ children }: BadgeProp) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10">
      {children}
    </span>
  );
}

export default function ArtGallery() {
  return (
    <Layout
      title="All projects"
      description="List of responsive and user-friendly websites"
      image="/portfolio-ogimage.jpg"
    >
      <main className="py-8 lg:py-24">
        <section>
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <div>
              <h1 className="mb-8 text-2xl font-bold leading-tight ">
                Portfolio
              </h1>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-y-8 lg:gap-y-12 sm:gap-x-6 lg:gap-x-10 md:grid-cols-3">
              <Link href="/portfolio/art-gallery" className="group">
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/espacio-manila/thumbnail.jpg"
                    width="800"
                    height="800"
                    alt="Espacio Manila Gallery"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                  Espacio Manila
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Portfolio and Business Website
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwindcss</Badge>
                  <Badge>Figma</Badge>
                  <Badge>PSD</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </Link>
              <Link href="/portfolio/twitter-clone" className="group">
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/twitter-clone/thumbnail_01.jpg"
                    width="800"
                    height="800"
                    alt="Twitter clone app"
                  />
                </div>
                <div className="bg-white">
                  <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                    Twitter Clone
                  </h3>
                  <span className="inline-block mt-1 text-sm">
                    Web application
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2 ">
                    <Badge>Next.js</Badge>
                    <Badge>NextAuth.js</Badge>
                    <Badge>SWR</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwindcss</Badge>
                    <Badge>Sanity.io</Badge>
                    <Badge>Vercel</Badge>
                  </div>
                </div>
              </Link>
              <Link
                href="/portfolio/group-chat-messenger"
                className="group"
              >
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/realtime-group-chat/thumbnail.jpg"
                    width="800"
                    height="800"
                    alt="Group Chat Messenger"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue ">
                  Group Chat Messenger
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Web Application
                </span>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  <Badge>React.js</Badge>
                  <Badge>Tailwindcss</Badge>
                  <Badge>Firebase Authentication</Badge>
                  <Badge>Firestore Database</Badge>
                </div>
              </Link>
              <Link
                href="/portfolio/url-shortener-landing-page"
                className="group"
              >
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/url-shortener/thumbnail.jpg"
                    width="800"
                    height="800"
                    alt="URL Shortener Landing Page"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue ">
                  URL Shortener
                </h3>
                <span className="inline-block mt-1 text-sm">Landing Page</span>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  <Badge>Next.js</Badge>
                  <Badge>Tailwindcss</Badge>
                </div>
              </Link>
              <Link href="/portfolio/applab-clone" className="group">
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/applab/thumbnail.jpg"
                    width="1400"
                    height="800"
                    alt="Applab Landing Page"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue ">
                  Applab
                </h3>
                <span className="inline-block mt-1 text-sm">Landing Page</span>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Bootstrap</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>JQuery</Badge>
                </div>
              </Link>
              <Link href="/portfolio/green-cleaner" className="group">
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/green-cleaner/thumbnail.jpg"
                    width="1400"
                    height="800"
                    alt="Green Cleaner"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue ">
                  Green Cleaner
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Web Design/Landing Page
                </span>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  <Badge>Figma</Badge>
                  <Badge>PSD</Badge>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
