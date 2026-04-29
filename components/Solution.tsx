'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: 'Análisis de mercado',
    title: 'CMA automatizado en minutos',
    body:
      'Cargás los datos de la propiedad y los comparables que elegís vos. Reval aplica los factores de ajuste y genera el análisis comparativo al instante. Sin planillas, sin trabajo manual.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    label: 'Carga de comparables',
    title: 'Vos elegís, Reval extrae',
    body:
      'Pegás las URLs de los comparables desde portales como Zonaprop y Reval extrae automáticamente precio, superficie y datos de publicación. Vos decidís cuáles incluir — el sistema se adapta a tu criterio.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: 'Reportes profesionales',
    title: 'Un reporte listo para convencer',
    body:
      'En un clic, Reval genera un reporte profesional con gráficos, precio estimado y tasa de confianza en la tasación. Diseñado para que el propietario diga que sí.',
  },
]

export default function Solution() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">La solución</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Reval automatiza lo que más
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              tiempo te consume
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Sin tecnicismos. Sin curva de aprendizaje larga. Empezás a generar tasaciones profesionales el mismo día.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {solutions.map(({ icon, label, title, body }, index) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-gray-200 bg-white p-7 group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-all duration-500 translate-x-1/2 -translate-y-1/2" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600 mb-5 border border-blue-100">
                  {icon}
                </div>
                <span className="block text-xs font-semibold text-blue-500 tracking-widest uppercase mb-2">
                  {label}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
