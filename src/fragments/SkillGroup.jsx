import Heading from '../elements/Heading'
import ChipList from './ChipList'

const dots = { dev: 'bg-dev', qa: 'bg-qa' }
const tops = { dev: 'border-t-dev', qa: 'border-t-qa' }

export default function SkillGroup({ tone, title, items, tools }) {
  return (
    <div className={`h-full rounded-2xl border border-t-[3px] border-line bg-card p-7 ${tops[tone]}`}>
      <Heading level="h3" className="mb-4 flex items-center gap-2.5 text-[22px]">
        <span className={`h-2.5 w-2.5 rounded-full ${dots[tone]}`} />{title}
      </Heading>
      <ChipList items={items} soft />
      <small className="mb-2.5 mt-5 block text-[13px] text-mute">Alat</small>
      <ChipList items={tools} soft />
    </div>
  )
}
