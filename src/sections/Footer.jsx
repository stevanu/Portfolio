import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1080px] flex-wrap justify-between gap-3 px-6 pb-10 pt-16 text-[13px] text-mute">
      <span>© 2026 {profile.name}</span><span>{profile.location}</span>
    </footer>
  )
}
