import Button from "../elements/Button";
import Heading from "../elements/Heading";
import { profile } from "../data/profile";

export default function ContactSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-[1200px] overflow-hidden rounded-[28px] bg-ink p-8 text-bg md:mt-16 md:p-12">
      <div className="relative">
        <Heading className="max-w-[14ch] text-[clamp(32px,5vw,56px)]">
          Mari bekerja sama
        </Heading>

        <p className="mt-5 max-w-[46ch] opacity-75">
          Saya sedang mencari peran web developer atau QA. Kirim pesan, saya
          balas secepatnya.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block break-all border-b-2 border-current font-display text-[clamp(22px,4vw,36px)] font-bold tracking-tight"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={profile.whatsapp} variant="light">
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
