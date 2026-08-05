export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-6 py-7 text-sm text-muted">
        <span>© {new Date().getFullYear()} Yeshvanth</span>
        <span className="font-mono">React · Vite · Tailwind</span>
      </div>
    </footer>
  );
}
