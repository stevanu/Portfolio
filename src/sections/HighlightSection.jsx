import { Link } from "react-router-dom";
import Reveal from "../elements/Reveal";
import SectionTitle from "../fragments/SectionTitle";
import ProjectCard from "../fragments/ProjectCard";
import { projects } from "../data/profile";

export default function HighlightSection() {
  return (
    <section className="pt-20 px-20 md:pt-28">
      <SectionTitle sub="Beberapa proyek yang pernah saya kerjakan.">
        Proyek pilihan
      </SectionTitle>
      <div className="grid gap-[18px] md:grid-cols-3">
        {projects.slice(0, 3).map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
      <Link
        to="/proyek"
        className="mt-8 inline-block border-b-2 border-ink font-bold"
      >
        Lihat semua proyek →
      </Link>
    </section>
  );
}
