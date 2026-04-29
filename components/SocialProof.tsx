'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '80%',
    label: 'Menos tiempo por tasación',
    sub: 'Lo que tardaba horas tarda minutos.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    value: '+120',
    label: 'Tasaciones generadas',
    sub: 'Equipos inmobiliarios ya usan Reval.',
    color: 'from-violet-600 to-purple-500',
  },
  {
    value: '3×',
    label: 'Más captaciones por agente',
    sub: 'En el primer trimestre de uso.',
    color: 'from-blue-600 to-violet-500',
  },
]

const testimonials = [
  {
    quote:
      'Antes preparar una tasación me llevaba entre dos y tres horas. Ahora lo hago en diez minutos y llego a la reunión con datos que el propietario no puede ignorar.',
    name: 'Marcela Rodríguez',
    role: 'Directora de Agencia',
    agency: 'Agencia independiente, Buenos Aires',
    initials: 'MR',
    color: 'from-blue-600 to-violet-600',
  },
  {
    quote:
      'El primer mes que usamos Reval, el equipo cerró cuatro captaciones más que el mes anterior. El reporte se convirtió en nuestra ventaja competitiva en cada reunión.',
    name: 'Ignacio Ferreyra',
    role: 'Broker Asociado',
    agency: 'Agencia inmobiliaria, Zona Norte GBA',
    initials: 'IF',
    color: 'from-violet-600 to-purple-600',
  },
  {
    quote:
      'Los propietarios dejaron de cuestionar el precio cuando empezamos a mostrarles el análisis comparativo. La credibilidad que da un dato real no tiene comparación.',
    name: 'Valentina Muñoz',
    role: 'Gerente Comercial',
    agency: 'Agencia inmobiliaria, Santiago de Chile',
    initials: 'VM',
    color: 'from-cyan-600 to-blue-600',
  },
]

export default function SocialProof() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">Resultados</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Los números hablan
          </h2>
        </motion.div>

        {/* Big metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {metrics.map(({ value, label, sub, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <p className={`text-6xl font-extrabold tracking-tight bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}>
                {value}
              </p>
              <p className="text-gray-900 font-semibold mb-1">{label}</p>
              <p className="text-gray-400 text-sm">{sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, agency, initials, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-semibold">{name}</p>
                  <p className="text-gray-400 text-xs">{role} · {agency}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
