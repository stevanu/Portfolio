import Heading from '../elements/Heading'
import ChipList from './ChipList'

const tones = { dev: 'bg-devbg text-dev', qa: 'bg-qabg text-qa' }

export default function DuoPanel({ tone, glyph, title, text, items }) {
  return (
    <div className={`group relative overflow-hidden rounded-[20px] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${tones[tone]}`}>
      <span aria-hidden="true" className="absolute -right-2 -top-4 font-display text-[110px] font-bold leading-none opacity-[.08] transition duration-300 group-hover:opacity-[.16]">{glyph}</span>
      <Heading className="mb-2 text-[34px]">{title}</Heading>
      <p className="mb-5 max-w-[34ch] text-ink">{text}</p>
      <ChipList items={items} />
    </div>
  )
}
