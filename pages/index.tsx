import Layout from "@/components/Layout";
import Hero from "@/pages/homepage/Hero";
import Experience from "@/pages/homepage/Experience";
import Projects from "@/pages/homepage/Projects";


export default function Home() {
  return (
    <Layout
      title="Portfolio - Engelbert Farol"
      description="Creating User-Friendly and Captivating Websites"
      image="/main-ogimage.jpg"
    >
      {/* Hero */}
      <Hero />
      {/* END** Hero */}

      {/* Latest Projects */}
      <Projects />

      {/* Skills & Experience */}
      <Experience />
    </Layout>
  );
}
