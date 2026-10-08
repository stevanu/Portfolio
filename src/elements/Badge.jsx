const tones = { dev: 'bg-devbg text-dev', qa: 'bg-qabg text-qa' }
const labels = { dev: 'Web development', qa: 'Quality assurance' }

export default function Badge({ tone }) {
  return <span className={`w-fit rounded-full px-3 py-[3px] text-[12.5px] font-bold ${tones[tone]}`}>{labels[tone]}</span>
}
