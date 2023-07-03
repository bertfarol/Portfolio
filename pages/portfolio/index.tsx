import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ArtGallery() {
  return (
    <Layout
      title="All projects"
      description="List of responsive and user-friendly websites"
      image="/portfolio-ogimage.jpg"
    >
      <main className="py-8 lg:py-24 lg:bg-[url('/blur_services.png')] bg-no-repeat bg-top bg-contain">
        <section>
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Web Dev Journey
              </h1>
              <p className="mt-2">
                Highlighting my growth and accomplishments through website
                projects
              </p>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 lg:gap-10 md:grid-cols-3">
              <Link
                href="/portfolio/art-gallery"
                className="pt-2 mt-12 group lg:pt-5"
              >
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
              </Link>
              <Link
                href="/portfolio/twitter-clone"
                className="pt-2 mt-12 group lg:pt-5"
              >
                <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/portfolio/twitter-clone/thumbnail.jpg"
                    width="800"
                    height="800"
                    alt="Twitter clone app"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                  Twitter Clone
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Web application
                </span>
              </Link>
              <Link
                href="/portfolio/url-shortener-landing-page"
                className="pt-2 mt-12 group lg:pt-5"
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
              </Link>
              <Link
                href="/portfolio/applab-clone"
                className="pt-2 mt-12 group lg:pt-5"
              >
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
              </Link>
              <Link
                href="/portfolio/green-cleaner"
                className="pt-2 mt-12 group lg:pt-5"
              >
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
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
