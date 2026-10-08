import Heading from '../elements/Heading'

const dots = { dev: 'bg-dev', qa: 'bg-qa', oth: 'bg-oth' }

export default function ExperienceItem({ job, open = false }) {
  return (
    <details open={open} className="group border-b border-line">
      <summary className="grid cursor-pointer list-none grid-cols-[1fr_24px] items-baseline gap-x-5 py-6 md:grid-cols-[200px_1fr_24px] [&::-webkit-details-marker]:hidden">
        <span className="col-start-1 row-start-2 text-sm text-mute md:row-start-1">{job.date}</span>
        <div className="col-start-1 row-start-1 md:col-start-2">
          <Heading level="h3" className="flex items-center gap-2.5 text-[22px]">
            <span className={`h-2.5 w-2.5 flex-none rounded-full ${dots[job.type]}`} />{job.title}
          </Heading>
          <span className="mt-1 block pl-5 text-sm text-mute">{job.company}</span>
        </div>
        <span className="col-start-2 row-start-1 text-right text-[22px] text-mute transition group-open:rotate-45 md:col-start-3">+</span>
      </summary>
      <ul className="mb-6 ml-5 list-disc text-[15px] text-mute md:ml-[238px]">
        {job.points.map((p) => <li key={p} className="mb-1.5 max-w-[68ch]">{p}</li>)}
      </ul>
    </details>
  )
}
