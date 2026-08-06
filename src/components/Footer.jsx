import { RESUME } from "../data/projects";
import Emblem from "./Emblem";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted">
        <span className="flex items-center gap-3">
          <Emblem size={26} />
          <span>© {new Date().getFullYear()} Yeshvanth</span>
        </span>
        <span className="flex items-center gap-5">
          <a
            href={`${import.meta.env.BASE_URL}${RESUME}`}
            download
            className="link-sweep font-mono text-xs text-brand"
          >
            ↓ Download resume
          </a>
          <span className="font-mono text-xs tracking-[0.14em] text-brand/70">
            REACT · VITE · TAILWIND
          </span>
        </span>
      </div>
    </footer>
  );
}
