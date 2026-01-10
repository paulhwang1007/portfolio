import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/home/Section";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section id="about-detail" title="About Me">
        <p className="text-gray-300">Detailed about content goes here.</p>
      </Section>
      <Footer />
    </div>
  );
}
