const services = [
  {
    title: 'Contabilidade Empresarial',
    description:
      'Gestão contábil completa, garantindo conformidade com a legislação e clareza financeira.',
  },
  {
    title: 'Departamento Fiscal',
    description:
      'Apuração de impostos e obrigações fiscais com segurança e pontualidade.',
  },
  {
    title: 'Folha de Pagamento',
    description:
      'Administração completa da folha, encargos e rotinas trabalhistas.',
  },
  {
    title: 'Consultoria Contábil',
    description:
      'Apoio estratégico para tomada de decisões e crescimento sustentável.',
  },
]

export function Services() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        
        <h2 className="mb-12 text-3xl font-bold text-slate-900">
          Nossos Serviços
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
