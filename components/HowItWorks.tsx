'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Ingresás la propiedad',
    body: 'Cargás los datos básicos del inmueble: dirección, superficie, ambientes, tipología y estado. En menos de un minuto ya tenés el expediente listo.',
    detail: 'Dirección · Superficie · Tipología · Estado',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    title: 'Cargás los comparables',
    body: 'Pegás las URLs de los comparables desde portales inmobiliarios. Reval extrae la información automáticamente y te muestra cada propiedad lista para analizar. Vos decidís cuáles usar.',
    detail: 'Desde Zonaprop · Extracción automática · Selección manual',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Generás el reporte',
    body: 'Con un clic, Reval produce un reporte profesional con gráficos, precio estimado, rango de confianza y análisis de mercado. Listo para compartir con el propietario.',
    detail: 'PDF · Compartible · Personalizable',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0e0e14] to-[#0B0B0C] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">El proceso</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Tres pasos para una tasación
            <br />
            <span className="text-zinc-400">que convence</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ number, icon, title, body, detail }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0B0B0C] border border-white/10 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-zinc-400">{number}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{body}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
                  <span className="text-[10px] text-zinc-500 font-medium">{detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
