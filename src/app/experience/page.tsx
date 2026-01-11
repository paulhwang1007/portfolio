import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/home/Section";

export default function ExperiencePage() {
  return (
    <div className="text-white">
      <Navbar />
      <Section id="experience-detail" title="Experience">
        <p className="text-gray-300">Detailed experience history.</p>
      </Section>
      <Footer />
    </div>
  );
}
