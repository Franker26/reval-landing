'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-400',
    metric: '80%',
    metricLabel: 'menos tiempo',
    title: 'Tasaciones en minutos, no en horas',
    body: 'Lo que antes requería hojas de cálculo y búsquedas manuales ahora toma menos de cinco minutos. Más tiempo para captaciones, menos tiempo en escritorios.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    gradient: 'from-green-500/20 to-emerald-500/10',
    iconColor: 'text-green-400',
    metric: '3×',
    metricLabel: 'más captaciones',
    title: 'Convertís más reuniones en captaciones',
    body: 'Los propietarios que ven datos concretos toman decisiones más rápido. Un reporte profesional con respaldo de mercado es el argumento más fuerte que tenés.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    metric: '✓',
    metricLabel: 'control de calidad',
    title: 'Usuarios juniors bajo supervisión',
    body: 'Los usuarios que lo requieran envían su tasación a revisión antes de poder exportar el informe. Un aprobador comenta sección por sección y aprueba o solicita cambios.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
    ),
    gradient: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-400',
    metric: '100%',
    metricLabel: 'visibilidad',
    title: 'Todas tus tasaciones de un vistazo',
    body: 'Un tablero Kanban organiza las tasaciones en Borrador, En progreso y Finalizado. Cualquier miembro del equipo sabe en qué estado está cada trabajo, sin preguntar.',
  },
]

export default function Benefits() {
  return (
    <section className="py-28 px-6 bg-[#0B0B0C]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">Por qué Reval</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Lo que cambia cuando
            <br />
            <span className="text-zinc-400">usás Reval</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            No vendemos software. Vendemos resultados de negocio medibles desde el primer mes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {benefits.map(({ icon, gradient, iconColor, metric, metricLabel, title, body }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-white/[0.07] bg-[#111115] p-7 overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative flex gap-5">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] ${iconColor} flex-shrink-0 border border-white/[0.06]`}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`text-2xl font-extrabold ${iconColor}`}>{metric}</span>
                    <span className={`text-xs font-semibold ${iconColor} opacity-70`}>{metricLabel}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="#demo"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-blue-900/25"
          >
            Solicitar demo
          </a>
          <a
            href="#simulador"
            className="text-zinc-400 text-sm font-medium hover:text-zinc-200 transition-colors"
          >
            Ver ejemplo de reporte →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
