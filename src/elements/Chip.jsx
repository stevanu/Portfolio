export default function Chip({ soft = false, children }) {
  return (
    <li className={`rounded-full border border-line px-3 py-1 text-[13px] font-medium text-ink ${soft ? 'bg-bg' : 'bg-card'}`}>
      {children}
    </li>
  )
}
