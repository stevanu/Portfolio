import SectionTitle from "../fragments/SectionTitle";
import EducationCard from "../fragments/EducationCard";
import { profile } from "../data/profile";

export default function AboutSection() {
  return (
    <section className="pt-10 px-20 md:pt-16">
      <SectionTitle>Tentang</SectionTitle>
      <div className="grid items-start gap-8 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <p className="m-0 max-w-[56ch] text-lg">{profile.about}</p>
        <EducationCard {...profile.education} />
      </div>
    </section>
  );
}
