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
               <div className="grid gap-8 md:grid-cols-2">
                 <Card className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">Hi I&apos;m Paul 👋</h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
                      Thank you for visiting my website! I&apos;m a full-stack developer and currently a 3rd-year student @ Cornell University. Building software for problem-solving is what fuels my desire to build and explore new tools.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      I specialize in frontend work, but my experience and interest extends to backend and full-stack whether it be through collaboration or personal exploration.
                    </p>
                 </Card>

                 <Card className="p-8 flex flex-col justify-center">
                    <p className="text-gray-300 mb-6 font-medium text-lg">
                      I am actively seeking Summer 2026 opportunities, please feel free to contact me!
                    </p>
                    
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          </div>
                          <a href="mailto:hwpaul1007@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">hwpaul1007@gmail.com</a>
                       </div>

                       <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          </div>
                          <span className="text-gray-300">+1 (805) 915-8089</span>
                       </div>

                       <div className="flex items-center gap-3">
                          <a href="https://github.com/paulhwang1007" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all shrink-0">
                             <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                          </a>
                          <a href="https://github.com/paulhwang1007" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors break-all">https://github.com/paulhwang1007</a>
                       </div>
                       
                       <div className="flex items-center gap-3">
                          <a href="https://www.linkedin.com/in/paul-kyojin-hwang/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all shrink-0">
                             <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                             </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/paul-kyojin-hwang/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors break-all">https://www.linkedin.com/in/paul-kyojin-hwang/</a>
                       </div>
                    </div>
                 </Card>
               </div>
            </Section>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
