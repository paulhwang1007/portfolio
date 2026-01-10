import { HTMLMotionProps, motion } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "", ...props }: SectionProps) {
  return (
    <motion.section id={id} className={`min-h-screen py-24 px-4 flex flex-col items-center justify-center ${className}`} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        {children}
      </motion.div>
    </motion.section>
  );
}
