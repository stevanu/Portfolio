import { useState } from "react";
import Reveal from "../elements/Reveal";
import SectionTitle from "../fragments/SectionTitle";
import FilterBar from "../fragments/FilterBar";
import ProjectCard from "../fragments/ProjectCard";
import { projects, projectFilters } from "../data/profile";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const shown = projects.filter((p) => filter === "all" || p.tone === filter);
  return (
    <section className="pt-10 px-20 md:pt-16">
      <SectionTitle sub="Proyek web dan pengujian yang pernah saya kerjakan.">
        Proyek
      </SectionTitle>
      <FilterBar options={projectFilters} value={filter} onChange={setFilter} />
      <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
