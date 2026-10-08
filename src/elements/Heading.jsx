export default function Heading({ level: Tag = 'h2', className = '', children }) {
  return <Tag className={`font-display font-bold leading-[1.1] tracking-[-.025em] ${className}`}>{children}</Tag>
}
