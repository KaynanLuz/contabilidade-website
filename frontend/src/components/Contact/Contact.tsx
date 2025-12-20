export function Contact() {
  return (
    <section
      id="contact"
      className="bg-blue-900 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Fale com a gente
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-blue-100">
          Precisa de apoio contábil para sua empresa crescer com segurança?
          Entre em contato e fale diretamente com um especialista.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
