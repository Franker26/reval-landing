'use client'

import { motion } from 'framer-motion'

const roadmapItems = [
  {
    status: 'Próximamente',
    statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Recomendación inteligente de comparables',
    body: 'Reval va a sugerir los comparables más relevantes basándose en el historial de tasaciones de tu equipo. Seguís teniendo el control — pero con una guía que aprende de tu criterio.',
    eta: 'Q3 2025',
  },
  {
    status: 'En desarrollo',
    statusColor: 'text-violet-700 bg-violet-50 border-violet-200',
    iconBg: 'bg-violet-50 border-violet-200 text-violet-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Integración con WhatsApp y chatbots',
    body: 'Enviá reportes de tasación directamente por WhatsApp y automatizá el seguimiento con propietarios desde canales de mensajería. Menos fricción, más respuestas.',
    eta: 'Q4 2025',
  },
  {
    status: 'En roadmap',
    statusColor: 'text-gray-500 bg-gray-100 border-gray-200',
    iconBg: 'bg-gray-100 border-gray-200 text-gray-500',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Informes de rendimiento por cotizador',
    body: 'Dashboard con métricas individuales por agente: tasaciones generadas, tiempo promedio y tasa de captación. Identificá quién necesita apoyo y quién está rindiendo al máximo.',
    eta: 'Q1 2026',
  },
  {
    status: 'En roadmap',
    statusColor: 'text-gray-500 bg-gray-100 border-gray-200',
    iconBg: 'bg-gray-100 border-gray-200 text-gray-500',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Análisis de tendencias de mercado por zona',
    body: 'Dashboards con evolución de precios por barrio, comparación interanual y proyecciones. Llegás a cada reunión sabiendo exactamente hacia dónde va el mercado.',
    eta: 'Q2 2026',
  },
]

export default function Roadmap() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">Visión</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Lo que viene en Reval
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Estamos construyendo la plataforma que va a redefinir cómo las agencias inmobiliarias captan propiedades en LATAM.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-200 via-violet-200 to-transparent hidden md:block" />

          <div className="space-y-5">
            {roadmapItems.map(({ status, statusColor, iconBg, icon, title, body, eta }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${iconBg}`}>
                    {icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 group-hover:border-gray-300 transition-colors shadow-sm hover:shadow-md">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`md:hidden w-8 h-8 rounded-xl flex items-center justify-center border ${iconBg}`}>
                        {icon}
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${statusColor}`}>
                        {status}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{eta}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
