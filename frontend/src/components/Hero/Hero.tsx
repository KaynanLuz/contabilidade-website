export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-28"
    >
      {/* Efeito decorativo */}
      <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-36 text-white">
        <div className="max-w-2xl">

          {/* Badge */}
          <p className="mb-4 text-sm font-medium text-blue-400">
            Escritório de contabilidade
          </p>

          {/* Título */}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Contabilidade com confiança e proximidade
          </h1>

          {/* Descrição */}
          <p className="mt-6 text-lg text-slate-300">
            Atendimento contábil especializado para empresas e pessoas físicas,
            com foco em clareza, responsabilidade e relacionamento próximo.
          </p>

          {/* Botões */}
          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Fale conosco
            </a>

            <a
              href="#services"
              className="rounded-md border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Nossos serviços
            </a>
          </div>

        </div>
      </div>

      {/* Transição suave */}
      <div className="h-16 bg-gradient-to-b from-slate-900 to-white" />
    </section>
  )
}