"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/home/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      
      <Hero />
      
      <Section id="about" title="About Me">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <p className="text-gray-300 leading-relaxed">
              [About Content Placeholder]
              <br />
              Passionate developer with a love for clean code and minimal design.
            </p>
          </Card>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-semibold">My Journey</h3>
            <p className="text-gray-400">Brief overview of your career path.</p>
          </div>
        </div>
      </Section>
      
      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="aspect-video p-6 flex flex-col justify-end group cursor-pointer hover:border-blue-500/30 transition-colors">
              <div className="mb-2 h-12 w-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                {/* Icon Placeholder */}
              </div>
              <h3 className="text-lg font-semibold">Project {item}</h3>
              <p className="text-sm text-gray-400">Short description of the project goes here.</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
            <Button variant="outline">View All Projects</Button>
        </div>
      </Section>

      <Section id="experience" title="Experience">
         <div className="space-y-6">
            {[1, 2].map((item) => (
               <Card key={item} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                     <h3 className="text-xl font-bold">Role Title</h3>
                     <span className="text-gray-400 text-sm">202X - Present</span>
                  </div>
                  <h4 className="text-blue-400 mb-4">Company Name</h4>
                  <p className="text-gray-300">Description of your responsibilities and achievements.</p>
               </Card>
            ))}
         </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Design"].map((skill) => (
               <div key={skill} className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300 border border-white/10">
                  {skill}
               </div>
            ))}
        </div>
      </Section>
      
      <Section id="contact" title="Get In Touch">
         <Card className="max-w-xl mx-auto p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
            <p className="text-gray-400 mb-8">
               I'm currently available for freelance projects and full-time opportunities.
            </p>
            <Button variant="primary" className="mx-auto">Say Hello</Button>
         </Card>
      </Section>

      <Footer />
    </div>
  );
}
