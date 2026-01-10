export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/20 py-8 text-center backdrop-blur-sm">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Paul Hwang. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}
