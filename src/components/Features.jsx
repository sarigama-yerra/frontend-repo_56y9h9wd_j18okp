import { Code2, Layers, Sparkles, Workflow, MousePointerClick, ShieldCheck, Box, Command } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'True code‑first',
    desc: 'Semantic editing, diff‑aware patches, and conflictless merges. Your repo is the source of truth.'
  },
  {
    icon: Layers,
    title: 'Native primitives',
    desc: 'Tools get context, memory, filesystem, and process graph as first‑class citizens — not hacks.'
  },
  {
    icon: Sparkles,
    title: 'Model‑agnostic',
    desc: 'Claude, OpenAI, o3, local models — pick the best for the task. Plug‑in strategy with fallbacks.'
  },
  {
    icon: Workflow,
    title: 'Flow designer',
    desc: 'Compose multi‑step agent routines visually. Branch, loop, and gate with live state.'
  },
  {
    icon: MousePointerClick,
    title: 'Command palette',
    desc: 'Everything is a command. Quick‑open files, run tasks, dispatch agents, or scaffold features.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe by design',
    desc: 'Sandboxing, signed ops, and permission prompts. Human‑in‑the‑loop where it matters.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Designed for velocity, built for control</h2>
            <p className="mt-2 max-w-2xl text-white/70">A meticulous interface that balances power and calm. Everything feels exactly where it should be.</p>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 sm:block">Crafted with care</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:border-white/20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:scale-110" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
