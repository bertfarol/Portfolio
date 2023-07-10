import Layout from "@/components/Layout";
import Hero from "@/components/homepage/Hero";
import Experience from "@/components/homepage/Experience";
import Projects from "@/components/homepage/Projects";


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
