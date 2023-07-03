import Layout from "@/components/Layout";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Experience from "@/components/homepage/Experience";
import Projects from "@/components/homepage/Projects";


export default function Home() {
  return (
    <Layout
      title="Portfolio - Engelbert Farol"
      description="Creating User-Friendly and Captivating Websites"
      image="/home-ogimage.jpg"
    >
      {/* Hero */}
      <Hero />
      {/* END** Hero */}

      {/* Services*/}
      <Services />
      {/*END** Services */}

      {/* Skills & Experience */}
      <Experience />
      {/*END** Skills & Experience */}

      {/* Latest Projects */}
      <Projects />
      {/*END** Latest Projects */}
    </Layout>
  );
}
