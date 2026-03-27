export function Services() {
  return (
    <section 
      id="services" 
      className="w-full bg-white py-24 pb-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-3xl font-bold text-gray-900">
          <span className="text-blue-600">Nossos Serviços</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-2xl text-blue-600">📊</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Contabilidade Empresarial
            </h3>
            <p className="text-sm text-gray-600">
              Gestão contábil completa.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-2xl text-blue-600">🧾</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Departamento Fiscal
            </h3>
            <p className="text-sm text-gray-600">
              Apuração de impostos.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-2xl text-blue-600">💰</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Folha de Pagamento
            </h3>
            <p className="text-sm text-gray-600">
              Gestão trabalhista.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-2xl text-blue-600">📈</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Consultoria Contábil
            </h3>
            <p className="text-sm text-gray-600">
              Apoio estratégico.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}