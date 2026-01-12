export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-white/5 py-8 text-center backdrop-blur-md">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Built by Paul Hwang
      </p>
    </footer>
  );
}
