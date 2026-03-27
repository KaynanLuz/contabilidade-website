import luanaImg from "../../assets/images/contadora-luana.jpeg"

export function Luana() {
  return (
    <section
      id="luana"
      className="bg-white py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

        {/* TEXTO */}
        <div className="z-10 md:order-2">
          <h2 className="text-3xl font-bold text-slate-900">
            Luana Souza
          </h2>

          <p className="mt-2 text-blue-600 font-medium">
            Contadora
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Especialista em gestão contábil e folha de pagamento,
            atuando de forma estratégica para empresas que buscam
            organização e crescimento sustentável.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Atua com proximidade e soluções personalizadas,
            garantindo eficiência e segurança nas decisões financeiras.
          </p>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/SEU-LINK-AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.939v5.666H9.003V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.073-1.69 3.287 0 3.893 2.164 3.893 4.977v6.604zM5.337 7.433c-1.004 0-1.817-.814-1.817-1.817S4.333 3.8 5.337 3.8c1.003 0 1.817.813 1.817 1.816 0 1.003-.814 1.817-1.817 1.817zM6.854 20.452H3.819V9h3.035v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Ver LinkedIn
          </a>
        </div>

        {/* IMAGEM */}
        <div className="relative flex justify-start md:order-1">
          <img
            src={luanaImg}
            alt="Luana Souza"
            className="h-[380px] w-[280px] object-cover rounded-2xl shadow-2xl transition duration-500 hover:scale-105"
          />

          <div className="absolute -left-10 top-10 -z-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        </div>

      </div>
    </section>
  )
}