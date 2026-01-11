import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/home/Section";

export default function ContactPage() {
  return (
    <div className="text-white">
      <Navbar />
      <Section id="contact-detail" title="Contact">
        <p className="text-gray-300">Contact form and details.</p>
      </Section>
      <Footer />
    </div>
  );
}
