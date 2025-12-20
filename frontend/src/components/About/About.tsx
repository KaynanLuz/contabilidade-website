export function About() {
  return (
    <section id= "about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Sobre a Brianca & Souza
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
          Somos um escritório de contabilidade focado em ajudar empresas a
          crescerem com organização, segurança e planejamento financeiro.
          Atuamos com transparência, proximidade e soluções personalizadas para
          cada cliente.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Missão
            </h3>
            <p className="text-gray-600">
              Oferecer serviços contábeis claros, eficientes e estratégicos,
              contribuindo para o crescimento sustentável dos nossos clientes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Visão
            </h3>
            <p className="text-gray-600">
              Ser referência em contabilidade consultiva, reconhecida pela
              confiança, inovação e excelência no atendimento.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Valores
            </h3>
            <p className="text-gray-600">
              Ética, transparência, compromisso com resultados e relacionamento
              próximo com nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
    