'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Básico',
    tagline: 'Para agentes independientes',
    monthlyPrice: 39,
    annualPrice: 29,
    highlight: false,
    features: [
      'Hasta 20 tasaciones / mes',
      'Comparables manuales',
      'Reportes PDF estándar',
      'Soporte por email',
      '1 usuario',
    ],
    cta: 'Empezar gratis',
    ctaStyle: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300',
  },
  {
    name: 'Pro',
    tagline: 'Para equipos inmobiliarios',
    monthlyPrice: 99,
    annualPrice: 79,
    highlight: true,
    badge: 'Más popular',
    features: [
      'Tasaciones ilimitadas',
      'Extracción automática desde portales',
      'Reportes personalizados con logo',
      'Sistema de aprobación de tasaciones',
      'Vista Kanban del equipo',
      'Hasta 10 usuarios',
      'Soporte prioritario',
    ],
    cta: 'Solicitar demo',
    ctaStyle: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/25',
  },
  {
    name: 'Enterprise',
    tagline: 'Para agencias de gran escala',
    monthlyPrice: null,
    annualPrice: null,
    highlight: false,
    features: [
      'Todo de Pro, más:',
      'Usuarios ilimitados',
      'API + integraciones a medida',
      'Reportes white-label',
      'SLA dedicado',
      'Onboarding personalizado',
      'Manager de cuenta asignado',
    ],
    cta: 'Hablar con ventas',
    ctaStyle: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="precios" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">Precios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Planes diseñados para crecer
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Sin costos ocultos. Cancelás cuando querés.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Anual
              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                −20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map(({ name, tagline, monthlyPrice, annualPrice, highlight, badge, features, cta, ctaStyle }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                highlight
                  ? 'bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold">
                    {badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-gray-400 text-sm">{tagline}</p>
              </div>

              <div className="mb-6">
                {monthlyPrice ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">
                      USD {annual ? annualPrice : monthlyPrice}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">/mes por usuario</span>
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-extrabold text-gray-900">A medida</span>
                  </div>
                )}
                {monthlyPrice && annual && (
                  <p className="text-gray-400 text-xs mt-1">
                    Facturado anualmente · Ahorrás USD {(monthlyPrice - annualPrice!) * 12}/año
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-3 mb-7">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#demo"
                className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${ctaStyle}`}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          ¿Tenés dudas? Hablá con nuestro equipo →{' '}
          <a href="#demo" className="text-blue-600 underline underline-offset-2 hover:text-blue-700 transition-colors">
            Solicitar demo
          </a>
        </motion.p>
      </div>
    </section>
  )
}
