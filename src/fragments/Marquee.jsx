export default function Marquee({ items }) {
  const row = (hidden) => items.map((t) => (
    <span key={t + hidden} aria-hidden={hidden || undefined} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-medium text-mute">{t}</span>
  ))
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
        {row(false)}
        <span className="contents motion-reduce:hidden">{row(true)}</span>
      </div>
    </div>
  )
}
