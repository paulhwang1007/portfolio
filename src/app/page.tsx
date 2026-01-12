"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/home/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DotLoader } from "@/components/ui/dot-loader";
import { Timeline } from "@/components/ui/timeline";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { Skills } from "@/components/home/Skills";
import { BentoGrid } from "@/components/projects/BentoGrid";

const GAME_FRAMES = [
    [14, 7, 0, 8, 6, 13, 20],
    [14, 7, 13, 20, 16, 27, 21],
    [14, 20, 27, 21, 34, 24, 28],
    [27, 21, 34, 28, 41, 32, 35],
    [34, 28, 41, 35, 48, 40, 42],
    [34, 28, 41, 35, 48, 42, 46],
    [34, 28, 41, 35, 48, 42, 38],
    [34, 28, 41, 35, 48, 30, 21],
    [34, 28, 41, 48, 21, 22, 14],
    [34, 28, 41, 21, 14, 16, 27],
    [34, 28, 21, 14, 10, 20, 27],
    [28, 21, 14, 4, 13, 20, 27],
    [28, 21, 14, 12, 6, 13, 20],
    [28, 21, 14, 6, 13, 20, 11],
    [28, 21, 14, 6, 13, 20, 10],
    [14, 6, 13, 20, 9, 7, 21],
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-dismiss loader after a set time or use onComplete if it was finite
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
             <DotLoader
                frames={GAME_FRAMES}
                className="gap-1 mb-4"
                dotClassName="bg-white/20 [&.active]:bg-white size-2 rounded-full"
                duration={100}
             />
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.5 }}
               className="text-sm font-medium text-gray-400 tracking-widest uppercase"
             >
               Loading
             </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <Navbar />
            
            <Hero />
            
            <Section id="experience" width="max-w-full">
               <Timeline data={[
                 {
                   title: "2025",
                   content: (
                     <div>
                       <ExperienceItem
                         logo="/images/shop-online-logo.png"
                         logoAlt="Shop Online New York"
                         title="Software Engineer Intern"
                         company="Shop Online New York"
                         startPeriod="August 2025 - December 2025"
                         location="Remote - Yonkers, NY"
                         skills={["React", "Javascript", "Tailwind CSS", "Git", "Github", "Jira", "Figma"]}
                       >
                         <ul className="list-disc pl-5 space-y-3 text-neutral-300 text-base md:text-lg leading-relaxed">
                           <li className="pl-1">
                             Developed 15+ reusable React components and integrated APIs through component-driven architecture, reducing development time by 30% and enforcing UI consistency.
                           </li>
                           <li className="pl-1">
                             Optimized application performance by refactoring legacy code and applying React best practices, improving load speed by 40% for thousands of active users.
                           </li>
                         </ul>
                       </ExperienceItem>

                       <ExperienceItem
                         logo="/images/cusd-logo.png"
                         logoAlt="Cornell University Sustainable Design"
                         title="Frontend Web Developer"
                         company="Cornell University Sustainable Design"
                         startPeriod="January 2025 - present"
                         location="Ithaca, NY"
                         skills={["HTML/CSS", "Javascript", "Figma"]}
                       >
                         <ul className="list-disc pl-5 space-y-3 text-neutral-300 text-base md:text-lg leading-relaxed">
                           <li className="pl-1">
                             Implemented and deployed the project team’s responsive website from scratch using HTML, CSS, and JavaScript for 1000+ monthly visitors (<a href="https://cusd.cornell.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://cusd.cornell.edu/</a>), improving public visibility and access to team information.
                           </li>
                         </ul>
                       </ExperienceItem>
                     </div>
                   ),
                 },
                 {
                   title: "2024",
                   content: (
                     <div>
                       <ExperienceItem
                         logo="/images/pideltapsi-logo.jpg"
                         logoAlt="Pi Delta Psi Incorporated"
                         title="Frontend Web Developer"
                         company="Pi Delta Psi Fraternity Inc."
                         startPeriod="October 2024 - present"
                         location="Ithaca, NY"
                         skills={["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]}
                       >
                         <ul className="list-disc pl-5 space-y-3 text-neutral-300 text-base md:text-lg leading-relaxed">
                           <li className="pl-1">
                             Developed and maintained a React.js production-quality web platform, deploying on Vercel with CI/CD pipelines to ensure reliable content updates and a consistent user experience.
                           </li>
                           <li className="pl-1">
                             Optimized site performance and SEO by implementing Next.js best practices for load speed, indexing, and scalability.
                           </li>
                         </ul>
                       </ExperienceItem>
                     </div>
                   ),
                 },
                 {
                   title: "2023",
                   content: (
                     <div>
                       <ExperienceItem
                         logo="/images/cornell-logo.png"
                         logoAlt="Cornell University"
                         title="B.S. in Information Science, Systems, and Technology"
                         company="Cornell University"
                         startPeriod="Aug 2023 - May 2027"
                         location="Ithaca, NY"
                         skills={["Java", "Python", "Swift", "R", "HTML/CSS", "Javascript"]}
                       >
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-2">
                          <span className="font-semibold text-white">Relevant Coursework:</span>
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-neutral-300 text-base md:text-lg leading-relaxed">
                          <li className="pl-1">
                            Object-Oriented Programming, Data Structures, Discrete Structures, Networks, Java, R, Python, Web Development, iOS Development, Linear Algebra, Multivariable Calculus, Differential Equations, Probability & Statistics
                          </li>
                        </ul>
                       </ExperienceItem>
                     </div>
                   ),
                 },
               ]} />
            </Section>


            
            <Section id="projects" title="Projects">
              <BentoGrid />
            </Section>

            <Skills />


            
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
