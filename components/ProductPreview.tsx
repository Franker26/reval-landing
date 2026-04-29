'use client'

import { motion } from 'framer-motion'

const comparables = [
  { address: 'Av. Corrientes 1842, Piso 3', area: 75, price: 460000, diff: -5.2 },
  { address: 'Lavalle 2341, Piso 8', area: 82, price: 498000, diff: +2.7 },
  { address: 'Sarmiento 1653, Piso 2', area: 71, price: 435000, diff: -10.3 },
  { address: 'B. Mitre 2081, Piso 5', area: 78, price: 475000, diff: -2.1 },
  { address: 'Av. Santa Fe 1200, Piso 7', area: 76, price: 463000, diff: -4.5 },
]

const maxPrice = 498000
const estimatedValue = 485000

const BarChart = () => {
  const bars = comparables.map((c) => ({
    pct: Math.round((c.price / maxPrice) * 100),
    label: `$${(c.price / 1000).toFixed(0)}k`,
  }))

  return (
    <div className="mt-4">
      <div className="flex items-end gap-2 h-28">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[9px] text-zinc-500 font-medium">{bar.label}</span>
            <motion.div
              className="w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-violet-500"
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxHeight: '100%' }}
            />
          </div>
        ))}
        {/* Estimated value bar */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <span className="text-[9px] text-blue-300 font-bold">$485k</span>
          <motion.div
            className="w-full rounded-t-sm bg-gradient-to-t from-blue-400 to-cyan-300 ring-1 ring-blue-400/50"
            initial={{ height: 0 }}
            whileInView={{ height: '97%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxHeight: '100%' }}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-blue-600 to-violet-500" />
          <span className="text-[9px] text-zinc-500">Comparables</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-blue-400 to-cyan-300" />
          <span className="text-[9px] text-zinc-400 font-medium">Valor estimado</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductPreview() {
  return (
    <section id="preview" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">La plataforma</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Así trabaja Reval
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Vos cargás los datos, Reval hace el análisis y confecciona el reporte. Todo desde un solo lugar.
          </p>
        </motion.div>

        {/* Mock browser window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-gray-200 overflow-hidden shadow-2xl shadow-gray-900/10"
          style={{ background: '#111115' }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0e0e12] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="max-w-xs mx-auto bg-[#1a1a20] rounded-md px-3 py-1 flex items-center gap-2">
                <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[10px] text-zinc-500 font-medium">app.reval.io/tasaciones/nuevo</span>
              </div>
            </div>
          </div>

          {/* App shell */}
          <div className="flex h-[580px] overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 bg-[#0e0e12] border-r border-white/[0.05] flex flex-col items-center py-4 gap-4 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20L12 4L21 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="mt-2 flex flex-col gap-3">
                {[
                  <path key="a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                  <path key="b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                  <path key="c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
                ].map((p, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${i === 1 ? 'bg-blue-600/20 text-blue-400' : 'text-zinc-600 hover:text-zinc-400'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">{p}</svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left panel: property form */}
              <div className="w-72 border-r border-white/[0.05] p-4 overflow-y-auto flex-shrink-0 bg-[#111115]">
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">Nueva tasación</p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 font-medium">Dirección</label>
                    <div className="rounded-lg bg-[#1a1a20] border border-white/[0.06] px-3 py-2 text-xs text-zinc-300">
                      Av. Callao 1200, CABA
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-zinc-500 mb-1 font-medium">Superficie</label>
                      <div className="rounded-lg bg-[#1a1a20] border border-white/[0.06] px-3 py-2 text-xs text-zinc-300">80 m²</div>
                    </div>
                    <div>
                      <label className="block text-[10px] text-zinc-500 mb-1 font-medium">Ambientes</label>
                      <div className="rounded-lg bg-[#1a1a20] border border-white/[0.06] px-3 py-2 text-xs text-zinc-300">3 amb.</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 font-medium">Tipo</label>
                    <div className="rounded-lg bg-[#1a1a20] border border-white/[0.06] px-3 py-2 text-xs text-zinc-300">Departamento</div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 font-medium">Estado</label>
                    <div className="rounded-lg bg-[#1a1a20] border border-white/[0.06] px-3 py-2 text-xs text-zinc-300">Muy bueno</div>
                  </div>

                  <div className="pt-1">
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Comparables seleccionados</p>
                    <div className="space-y-1.5">
                      {comparables.map((c, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg bg-[#1a1a20] border border-white/[0.05] p-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] text-zinc-300 truncate">{c.address}</p>
                            <p className="text-[9px] text-zinc-500">{c.area}m² · ${(c.price / 1000).toFixed(0)}k</p>
                          </div>
                          <span className={`text-[9px] font-semibold ${c.diff < 0 ? 'text-red-400' : 'text-green-400'}`}>
                            {c.diff > 0 ? '+' : ''}{c.diff}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel: report */}
              <div className="flex-1 p-5 overflow-y-auto bg-[#0f0f14]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Reporte de tasación</p>
                    <p className="text-xs text-zinc-300 mt-0.5">Av. Callao 1200 · CABA · 80m²</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] text-zinc-400 hover:bg-white/[0.07] transition-colors">
                      Editar
                    </button>
                    <button className="px-2.5 py-1 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-[10px] text-white font-medium">
                      Exportar PDF
                    </button>
                  </div>
                </div>

                {/* Estimated value — hero card */}
                <div className="rounded-xl bg-gradient-to-br from-blue-900/30 to-violet-900/20 border border-blue-500/20 p-4 mb-4">
                  <p className="text-[10px] text-blue-300/70 font-semibold uppercase tracking-widest mb-1">Valor estimado de mercado</p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl font-extrabold text-white tracking-tight"
                  >
                    USD {estimatedValue.toLocaleString('es-AR')}
                  </motion.p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-[9px] font-semibold">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Alta confianza · 94%
                    </span>
                    <span className="text-[9px] text-zinc-500">Rango: USD 462k – USD 508k</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="rounded-xl bg-[#16161c] border border-white/[0.05] p-4 mb-4">
                  <p className="text-[10px] font-semibold text-zinc-400 mb-2">Comparación de precios de mercado</p>
                  <BarChart />
                </div>

                {/* Summary stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Precio/m²', value: 'USD 6.063' },
                    { label: 'Comparables', value: '5 propiedades' },
                    { label: 'Zona', value: 'San Nicolás' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-[#16161c] border border-white/[0.05] p-3">
                      <p className="text-[9px] text-zinc-500 font-medium mb-1">{label}</p>
                      <p className="text-xs text-zinc-200 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mt-10"
        >
          <a
            href="#demo"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
          >
            Solicitar demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
