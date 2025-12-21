import { useState } from "react"
import thaisImg from "../../assets/images/contadora-luana.jpeg"
import luanaImg from "../../assets/images/contadora-thais.jpeg"

export function Team() {
  const [openProfile, setOpenProfile] = useState<null | "thais" | "luana">(null)

  return (
    <section
      id="equipe"
      className="w-full bg-slate-50 py-20"
      aria-labelledby="team-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 id="team-title" className="text-3xl font-bold text-slate-900">
            As Profissionais
          </h2>
          <p className="mt-4 text-slate-600">
            Conheça as contadoras responsáveis por cuidar da saúde financeira da sua empresa.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Thais */}
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <img
                src={thaisImg}
                alt="Thais Briança, contadora"
                className="mb-4 h-40 w-40 rounded-full object-cover"
              />

              <h3 className="text-xl font-semibold text-slate-900">
                Thais Briança
              </h3>

              <span className="mt-1 text-sm text-slate-500">
                Contadora
              </span>

              <p className="mt-4 text-slate-600">
                Atuação focada em contabilidade empresarial e fiscal.
              </p>

              <button
                onClick={() =>
                  setOpenProfile(openProfile === "thais" ? null : "thais")
                }
                className="mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                {openProfile === "thais" ? "Ver menos" : "Ver mais"}
              </button>

              {openProfile === "thais" && (
                <p className="mt-4 text-slate-600">
                  Trabalha com compromisso, organização e clareza nas informações,
                  ajudando empresas a manterem conformidade legal e saúde financeira
                  com decisões contábeis seguras e transparentes.
                </p>
              )}
            </div>
          </article>

          {/* Luana */}
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <img
                src={luanaImg}
                alt="Luana Souza, contadora"
                className="mb-4 h-40 w-40 rounded-full object-cover"
              />

              <h3 className="text-xl font-semibold text-slate-900">
                Luana Souza
              </h3>

              <span className="mt-1 text-sm text-slate-500">
                Contadora
              </span>

              <p className="mt-4 text-slate-600">
                Especialista em gestão contábil e folha de pagamento.
              </p>

              <button
                onClick={() =>
                  setOpenProfile(openProfile === "luana" ? null : "luana")
                }
                className="mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                {openProfile === "luana" ? "Ver menos" : "Ver mais"}
              </button>

              {openProfile === "luana" && (
                <p className="mt-4 text-slate-600">
                  Atua de forma próxima aos clientes, oferecendo soluções
                  práticas, estratégicas e personalizadas para o crescimento
                  sustentável dos negócios.
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

