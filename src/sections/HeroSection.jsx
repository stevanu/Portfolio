import Button from "../elements/Button";
import Reveal from "../elements/Reveal";
import RotatingRole from "../fragments/RotatingRole";
import GlowBackdrop from "../fragments/GlowBackdrop";
import DuoPanel from "../fragments/DuoPanel";
import Marquee from "../fragments/Marquee";
import { profile, sides, marquee } from "../data/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-10 md:pt-16 px-20">
      <GlowBackdrop />
      <RotatingRole />
      <p className="mt-7 max-w-[50ch] text-[19px] text-mute">{profile.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/proyek">Lihat proyek</Button>
        <Button to="/kontak" variant="outline">
          Hubungi saya
        </Button>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {sides.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <DuoPanel {...s} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <Marquee items={marquee} />
      </div>
    </section>
  );
}
