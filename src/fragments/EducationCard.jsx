import Heading from '../elements/Heading'

export default function EducationCard({ school, major, gpa }) {
  return (
    <div className="rounded-2xl border border-line border-t-[3px] border-t-dev bg-card p-6">
      <small className="text-[13px] text-mute">Pendidikan</small>
      <Heading level="h3" className="my-1.5 text-xl">{school}</Heading>
      <p className="text-[15px] text-mute">{major}<br />{gpa}</p>
    </div>
  )
}
