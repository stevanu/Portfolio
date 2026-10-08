import Heading from '../elements/Heading'

export default function SectionTitle({ children, sub }) {
  return (
    <div className="mb-10">
      <Heading className="text-[clamp(32px,5vw,48px)]">{children}</Heading>
      <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-dev to-qa" />
      {sub && <p className="mt-4 max-w-[56ch] text-mute">{sub}</p>}
    </div>
  )
}
