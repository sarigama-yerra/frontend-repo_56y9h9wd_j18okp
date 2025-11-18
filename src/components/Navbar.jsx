import { useState } from 'react'
import { Menu, Sparkles, Rocket, Shield } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/40 blur-xl" />
                <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                  <Sparkles size={20} />
                </div>
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Claudia Studio</span>
              <span className="ml-2 hidden rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70 sm:inline">Next‑gen</span>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/80 sm:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#workspace" className="transition hover:text-white">Workspace</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <a href="#security" className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-emerald-300/90">
                <Shield size={14} /> Security
              </a>
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">Login</button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:brightness-105">
                <Rocket size={16} /> Launch
              </button>
            </div>

            <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 sm:hidden" onClick={() => setOpen(!open)}>
              <Menu size={18} />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 p-4 sm:hidden">
              <div className="grid gap-2 text-sm text-white/80">
                <a href="#features" className="rounded-lg px-2 py-2 hover:bg-white/5">Features</a>
                <a href="#workspace" className="rounded-lg px-2 py-2 hover:bg-white/5">Workspace</a>
                <a href="#pricing" className="rounded-lg px-2 py-2 hover:bg-white/5">Pricing</a>
                <a href="#security" className="rounded-lg px-2 py-2 hover:bg-white/5">Security</a>
                <div className="mt-2 flex gap-2">
                  <button className="flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90">Login</button>
                  <button className="flex-1 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-3 py-2 font-semibold text-slate-900">Launch</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
