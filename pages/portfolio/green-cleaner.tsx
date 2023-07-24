import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function GreenCleaner() {
  return (
    <Layout
      title="Green Cleaner Landing Page"
      description="strategically crafted to highlight the most desirable products and engage customers with irresistible promotions."
      image="/green-cleaner-ogimage.jpg"
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
              <li className="text-slate-500">Green Cleaner</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Web Design/Landing Page</p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Green Cleaner
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Crafting a captivating ecommerce landing page using Figma and
                Photoshop
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="leading-relaxed">
                Explore my ecommerce landing page design, strategically crafted
                to highlight the most desirable products and engage customers
                with irresistible promotions. With a thoughtfully structured
                layout, I create an immersive experience that drives sales and
                encourages customers to explore more products. Witness the
                impact of my design choices on my portfolio website and elevate
                your ecommerce presence.
              </p>
              <div className="mt-8 lg:mt-16">
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
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#1a6938]">
          <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
            {/* contianer */}
            <h2 className="text-4xl font-semibold">Green Cleaner</h2>
            <div className="mt-10 lg:columns-2 gap-x-10 columns-1">
              <div className="py-4">
                <Image
                  src="/portfolio/green-cleaner/homepage.jpg"
                  width="1920"
                  height="3418"
                  alt="Green Cleaner"
                  className="rounded-lg shadow-gallery"
                />
              </div>
              <div className="py-4">
                <Image
                  src="/portfolio/green-cleaner/style.jpg"
                  width="1400"
                  height="1181"
                  alt="Green Cleaner"
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
