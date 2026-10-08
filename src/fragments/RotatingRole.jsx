const base = 'col-start-1 row-start-1 bg-clip-text pb-[.14em] text-transparent opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:[grid-row:auto]'

export default function RotatingRole() {
  return (
    <h1 aria-label="Web Developer dan Quality Assurance" className="grid font-display text-[clamp(34px,6vw,68px)] font-bold leading-[1.1] tracking-[-.035em]">
      <span aria-hidden="true" className={`${base} animate-swapA bg-gradient-to-r from-dev to-violet-500`}>Web Developer</span>
      <span aria-hidden="true" className={`${base} animate-swapB bg-gradient-to-r from-qa to-cyan-600`}>Quality Assurance</span>
    </h1>
  )
}
