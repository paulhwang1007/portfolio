import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    outline: "border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
