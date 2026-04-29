'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="demo" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0C]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Gradient blob */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Demo disponible esta semana
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Empezá a captar
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              más propiedades hoy
            </span>
          </h2>

          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Hablá con nuestro equipo y te mostramos cómo Reval puede transformar el proceso de captación de tu agencia en una semana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:demo@reval.io"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-2xl shadow-blue-900/40"
            >
              Solicitar demo gratuita
            </a>
            <a
              href="#simulador"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 font-medium text-base hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              Simulá una tasación →
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-600 text-sm">
            <span>Sin tarjeta de crédito</span>
            <span className="hidden sm:block">·</span>
            <span>Demo en 15 minutos</span>
            <span className="hidden sm:block">·</span>
            <span>Onboarding incluido</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
