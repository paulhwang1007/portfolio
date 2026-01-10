import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/home/Section";

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section id="projects-detail" title="Projects">
        <p className="text-gray-300">Detailed list of projects goes here.</p>
      </Section>
      <Footer />
    </div>
  );
}
