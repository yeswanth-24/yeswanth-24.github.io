import { GITHUB, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Everything else</h2>
        <p className="mt-1 mb-9 text-muted">
          All open source ·{" "}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
            github.com/yeswanth-24
          </a>
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
