import { useState } from 'react'
import { TerminalSquare, GitBranch, FileCode2, LayoutGrid, ChevronRight, Play, Pause, Circle } from 'lucide-react'

export default function WorkspacePreview() {
  const [running, setRunning] = useState(true)

  return (
    <section id="workspace" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">The workspace</h2>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Live system preview</div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-white/10 lg:block">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="text-xs font-medium text-white/70">Project</div>
                <div className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1 text-[10px] text-white/60">
                  <Circle size={10} className={running ? 'text-emerald-400' : 'text-yellow-400'} />
                  {running ? 'Running' : 'Paused'}
                </div>
              </div>
              <nav className="space-y-1 p-2 text-sm text-white/70">
                <a className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5" href="#">
                  <span className="inline-flex items-center gap-2"><FileCode2 size={16}/> src</span>
                  <ChevronRight size={14} />
                </a>
                <a className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5" href="#">
                  <span className="inline-flex items-center gap-2"><GitBranch size={16}/> branches</span>
                  <ChevronRight size={14} />
                </a>
                <a className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5" href="#">
                  <span className="inline-flex items-center gap-2"><LayoutGrid size={16}/> agents</span>
                  <ChevronRight size={14} />
                </a>
              </nav>
            </aside>

            {/* Main */}
            <div className="min-h-[340px]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="inline-flex items-center gap-2 text-xs text-white/70">
                  <TerminalSquare size={16} /> agent-run: scaffold nextjs-auth
                </div>
                <div className="inline-flex items-center gap-2">
                  <button onClick={() => setRunning(!running)} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                    {running ? <Pause size={14} /> : <Play size={14} />} {running ? 'Pause' : 'Resume'}
                  </button>
                  <button className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-3 py-1.5 text-xs font-semibold text-slate-900">Dispatch</button>
                </div>
              </div>
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
                  <div className="mb-2 text-xs font-medium text-white/60">Plan</div>
                  <div className="space-y-2 text-sm text-white/80">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">1. Create auth routes and scaffolding</div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">2. Set up database models and migrations</div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">3. Generate UI screens and components</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2 text-xs font-medium text-white/60">Live log</div>
                  <div className="space-y-2 text-[13px] text-white/80">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono">$ npx prisma migrate dev</div>
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono">[ok] created 4 files</div>
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono">[ok] generated 2 pages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
