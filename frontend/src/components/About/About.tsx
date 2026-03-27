
export function About() {
  return (
    <section
      id="about"
      className="relative w-full mt-20 py-24 bg-gray-50 scroll-mt-24 overflow-hidden"
    >

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Sobre a Brianca & Souza
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          Somos um escritório de contabilidade focado em ajudar empresas a
          crescerem com organização, segurança e planejamento financeiro.
          Atuamos com transparência, proximidade e soluções personalizadas para
          cada cliente.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          
          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Missão
            </h3>
            <p className="text-gray-600">
              Oferecer serviços contábeis claros e eficientes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Visão
            </h3>
            <p className="text-gray-600">
              Ser referência no mercado.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Valores
            </h3>
            <p className="text-gray-600">
              Ética e transparência.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}