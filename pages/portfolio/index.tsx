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
        <section className="">
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
                <div className="relative overflow-hidden duration-300 rounded-sm group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/espacio-manila.jpg"
                    width="1000"
                    height="750"
                    alt="Espacio Manila Gallery"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                  Art Gallery Website
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Portfolio and Business Website
                </span>
              </Link>
              <Link
                href="/portfolio/twitter-clone"
                className="pt-2 mt-12 group lg:pt-5"
              >
                <div className="relative overflow-hidden duration-300 rounded-sm group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/twitter-clone-app.jpg"
                    width="1000"
                    height="750"
                    alt="Twitter clone app"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                  Social Media Web App
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Web application
                </span>
              </Link>
              <Link
                href="/portfolio/url-shortener-landing-page"
                className="pt-2 mt-12 group lg:pt-5"
              >
                <div className="relative overflow-hidden duration-300 rounded-sm group-hover:opacity-70 shadow-5xl">
                  <Image
                    src="/url-shortener.jpg"
                    width="1000"
                    height="750"
                    alt="Espacio Manila Gallery"
                  />
                </div>
                <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue ">
                  Product Landing Page
                </h3>
                <span className="inline-block mt-1 text-sm">
                  Landing Page
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
