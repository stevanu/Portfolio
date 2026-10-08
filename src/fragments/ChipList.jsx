import Chip from '../elements/Chip'

export default function ChipList({ items, soft = false, className = '' }) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-[7px] p-0 ${className}`}>
      {items.map((item) => <Chip key={item} soft={soft}>{item}</Chip>)}
    </ul>
  )
}
