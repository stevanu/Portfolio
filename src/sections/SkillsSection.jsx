import Reveal from "../elements/Reveal";
import SectionTitle from "../fragments/SectionTitle";
import SkillGroup from "../fragments/SkillGroup";
import { skills, skillNote } from "../data/profile";

export default function SkillsSection() {
  return (
    <section className="pt-10 px-20 md:pt-16">
      <SectionTitle sub="Dua sisi yang saling melengkapi: membangun dan menguji.">
        Skill
      </SectionTitle>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <SkillGroup {...s} />
          </Reveal>
        ))}
      </div>
      <p className="mt-5 max-w-[70ch] text-[15px] text-mute">{skillNote}</p>
    </section>
  );
}
