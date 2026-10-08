import Heading from "../elements/Heading";
import Badge from "../elements/Badge";
import ChipList from "./ChipList";

const edge = { dev: "border-l-dev", qa: "border-l-qa" };
const linkTone = { dev: "text-dev", qa: "text-qa" };

export default function ProjectCard({ tone, title, text, link, tags }) {
  return (
    <article
      className={`flex h-full flex-col gap-3 rounded-2xl border border-l-[5px] border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${edge[tone]}`}
    >
      <Badge tone={tone} />
      <Heading level="h3" className="text-[21px]">
        {title}
      </Heading>
      <p className="m-0 text-[15px] text-mute">{text}</p>
      {/* {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`w-fit border-b-[1.5px] border-current text-sm font-bold ${linkTone[tone]}`}>
          Buka website ↗
        </a>
      )} */}
      <ChipList items={tags} soft className="mt-auto pt-1.5" />
    </article>
  );
}
