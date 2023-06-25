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
      <main className="py-8 lg:py-36">
        <section>
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <div className="grid sm:grid-cols-2 sm:gap-6 lg:gap-10 md:grid-cols-3">
              <Link
                href="/portfolio/art-gallery"
                className="pt-2 mt-12 border-t border-white group lg:pt-5"
              >
                <h3 className="text-3xl font-semibold duration-300 group-hover:text-accent-blue xl:text-h3">
                  Art Gallery Website
                </h3>
                <span className="inline-block mt-3 text-sm">
                  Portfolio and Business Website
                </span>
                <div className="relative mt-6 duration-300 group-hover:opacity-70">
                  <Image
                    src="/espacio-manila.jpg"
                    width="1000"
                    height="750"
                    alt="Espacio Manila Gallery"
                  />
                </div>
              </Link>
              <a
                href="#"
                className="pt-2 mt-12 border-t border-white group lg:pt-5"
              >
                <h3 className="text-3xl font-semibold duration-300 xl:text-h3 group-hover:text-accent-blue">
                  Social Media Web App
                </h3>
                <span className="inline-block mt-3 text-sm">
                  Web application
                </span>
                <div className="relative mt-6 duration-300 group-hover:opacity-70">
                  <Image
                    src="/twitter-clone-app.jpg"
                    width="1000"
                    height="750"
                    alt="Twitter clone app"
                  />
                </div>
              </a>
              <a
                href="#"
                className="pt-2 mt-12 border-t border-white group lg:pt-5"
              >
                <h3 className="text-3xl font-semibold duration-300 xl:text-h3 group-hover:text-accent-blue">
                  Product Landing Page
                </h3>
                <span className="inline-block mt-3 text-sm">
                  Web/Landing Page
                </span>
                <div className="relative mt-6 duration-300 group-hover:opacity-70">
                  <Image
                    src="/url-shortener.jpg"
                    width="1000"
                    height="750"
                    alt="Espacio Manila Gallery"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
