export default function GlowBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[560px] overflow-hidden">
      <div className="absolute -left-24 top-0 h-80 w-80 animate-float rounded-full bg-dev opacity-25 blur-3xl" />
      <div className="absolute right-0 top-28 h-80 w-80 animate-float rounded-full bg-qa opacity-20 blur-3xl [animation-delay:-4s]" />
    </div>
  )
}
