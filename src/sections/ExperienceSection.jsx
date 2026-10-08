import SectionTitle from "../fragments/SectionTitle";
import ExperienceItem from "../fragments/ExperienceItem";
import { jobs } from "../data/profile";

const legend = [
  ["bg-dev", "Web development"],
  ["bg-qa", "Quality assurance"],
  ["bg-oth", "Peran lain"],
];

export default function ExperienceSection() {
  return (
    <section className="pt-10 px-20 md:pt-16">
      <SectionTitle sub="Klik tiap baris untuk melihat detailnya.">
        Pengalaman
      </SectionTitle>
      <div className="mb-4 flex flex-wrap gap-5 text-[13px] text-mute">
        {legend.map(([c, l]) => (
          <span key={l} className="flex items-center gap-2">
            <i className={`h-[9px] w-[9px] rounded-full ${c}`} />
            {l}
          </span>
        ))}
      </div>
      <div className="border-t border-line">
        {jobs.map((j, i) => (
          <ExperienceItem key={j.title + j.date} job={j} open={i === 0} />
        ))}
      </div>
    </section>
  );
}
