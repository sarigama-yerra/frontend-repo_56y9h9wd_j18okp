import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-8">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            A world‑class UI for coding with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-white/70"
          >
            Ultra‑premium aesthetics, glass morphic depth, and a workflow so smooth it feels native. Built to make incumbents look dated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:brightness-105">Start crafting</button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">See live workspace</button>
            <span className="ml-1 text-xs text-white/60">No setup • Instant projects</span>
          </motion.div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
