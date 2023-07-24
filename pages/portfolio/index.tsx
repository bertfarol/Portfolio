import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import projects from "../../Projects/projects.json";
import { IndexKind } from "typescript";



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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-y-12 lg:gap-x-10 md:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index}>
                  <Link href={project.pageUrl} className="group">
                    <div className="relative overflow-hidden duration-300 rounded-lg group-hover:opacity-70 shadow-5xl">
                      <Image
                        src={project.image}
                        width="800"
                        height="800"
                        alt={project.title}
                      />
                    </div>
                    <h3 className="mt-6 font-semibold duration-300 text-h5 group-hover:text-accent-blue">
                      {project.title}
                    </h3>
                    <span className="inline-block mt-1 text-sm">
                      {project.category}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.map((stack, index) => (
                        <Badge key={index}>{stack}</Badge>
                      ))}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
