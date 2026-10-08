export default function FilterBar({ options, value, onChange }) {
  return (
    <div role="group" aria-label="Filter proyek" className="mb-6 flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-full border-[1.5px] px-[18px] py-2 text-sm font-medium transition ${value === o.value ? 'border-ink bg-ink text-bg' : 'border-line bg-card text-ink hover:border-ink'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
