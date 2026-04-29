'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
    tag: 'Tiempo',
    title: 'Las tasaciones te consumen horas que no tenés',
    body:
      'Buscar comparables a mano, armar planillas, formatear el reporte. Cada tasación te roba tiempo que deberías estar usando para captar propiedades.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M7 16a9 9 0 1010 0M12 8v4" />
      </svg>
    ),
    tag: 'Credibilidad',
    title: 'Un número sin respaldo genera objeciones',
    body:
      'Cuando presentás un precio sin datos concretos, el propietario duda. Esa duda se convierte en negociación. La negociación se convierte en una captación perdida.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: 'Competencia',
    title: 'Tus competidores ya están usando datos',
    body:
      'Mientras vos estimás basado en experiencia, otros presentan análisis comparativos con datos reales. Los propietarios eligen a quien demuestra, no a quien supone.',
  },
]

export default function Problem() {
  return (
    <section id="producto" className="py-28 px-6 bg-[#0B0B0C]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">El problema</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            El proceso actual te está
            <br />
            <span className="text-zinc-400">costando captaciones</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {problems.map(({ icon, tag, title, body }) => (
            <motion.div
              key={tag}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-white/[0.07] bg-[#111115] p-7 overflow-hidden group"
            >
              {/* Subtle corner glow on hover */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all duration-500 -translate-x-1/2 -translate-y-1/2" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-red-500/10 text-red-400 mb-5">
                  {icon}
                </div>
                <span className="block text-xs font-semibold text-red-400/70 tracking-widest uppercase mb-2">
                  {tag}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
