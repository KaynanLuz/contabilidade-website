import { useState, useRef } from "react"
import toast from "react-hot-toast"
import { Footer } from "../Footer/Footer"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  // 🔥 guarda posição do scroll
  const lastScrollPosition = useRef(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!")
        form.reset()
      } else {
        toast.error("Erro ao enviar mensagem.")
      }
    } catch {
      toast.error("Erro no servidor.")
    }

    setLoading(false)
  }

  // 🔥 CONTROLE DO FOOTER (corrigido)
  const handleToggleFooter = () => {
    if (!showFooter) {
      // salva posição atual
      lastScrollPosition.current = window.scrollY

      setShowFooter(true)

      // desce até o final
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        })
      }, 300)
    } else {
      setShowFooter(false)

      // volta exatamente pra posição anterior
      setTimeout(() => {
        window.scrollTo({
          top: lastScrollPosition.current,
          behavior: "smooth",
        })
      }, 200)
    }
  }

  return (
    <>
      <section
        id="contact"
        className="bg-blue-900 py-28 text-white scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          {/* HEADER */}
          <div className="mb-12 text-left max-w-6xl mx-auto px-6 -mt-10">
            <h2 className="text-3xl font-bold">
              Fale com a gente
            </h2>

            <p className="mt-4 text-blue-200">
              Escolha a melhor forma de entrar em contato
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-32 md:grid-cols-2 items-center">

            {/* FORMULÁRIO */}
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-sm border border-white/5 shadow-xl max-w-md -mt-6">

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="w-full rounded-md bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  required
                  className="w-full rounded-md bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  name="phone"
                  placeholder="Telefone"
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "")

                    if (value.length > 11) value = value.slice(0, 11)

                    if (value.length > 6) {
                      value = value.replace(
                        /^(\d{2})(\d{5})(\d+)/,
                        "($1) $2-$3"
                      )
                    } else if (value.length > 2) {
                      value = value.replace(
                        /^(\d{2})(\d+)/,
                        "($1) $2"
                      )
                    } else {
                      value = value.replace(/^(\d*)/, "($1")
                    }

                    e.target.value = value
                  }}
                  className="w-full rounded-md bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                  name="message"
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  required
                  className="w-full rounded-md bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>

              </form>
            </div>

            {/* WHATSAPP */}
            <div className="flex flex-col justify-center text-center md:text-left">

              <h3 className="text-2xl font-semibold mb-4">
                Atendimento rápido
              </h3>

              <p className="mb-8 text-blue-200">
                Prefere falar direto com a gente? Clique abaixo e fale agora pelo WhatsApp.
              </p>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit self-center md:self-start rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600 shadow-lg"
              >
                Falar pelo WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* BOTÃO */}
        <div className="-mt-10 flex justify-end">
          <button
            onClick={handleToggleFooter}
            className="mr-10 flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            {showFooter ? "Ver menos ↑" : "Ver mais ↓"}
          </button>
        </div>

      </section>

      {/* FOOTER COM ANIMAÇÃO */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showFooter ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Footer />
      </div>
    </>
  )
}