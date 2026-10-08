import { Link } from 'react-router-dom'

const base = 'inline-block rounded-full border-[1.5px] px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5'
const variants = {
  solid: 'border-ink bg-ink text-bg hover:opacity-90',
  outline: 'border-ink text-ink hover:bg-ink hover:text-bg',
  light: 'border-bg bg-bg text-ink hover:opacity-90',
  lightOutline: 'border-bg text-bg hover:bg-bg hover:text-ink',
}

export default function Button({ to, href, variant = 'solid', className = '', children }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  const external = href?.startsWith('http')
  return <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{children}</a>
}
