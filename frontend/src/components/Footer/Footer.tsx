export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Brianca & Souza Contabilidade
            </h3>
            <p className="text-sm">
              Soluções contábeis completas para empresas que buscam
              crescimento com segurança e organização.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Início</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">
              Contato
            </h4>
            <p className="text-sm">📍 Sua cidade - UF</p>
            <p className="text-sm">📧 contato@seudominio.com</p>
            <p className="text-sm">📞 (00) 00000-0000</p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Brianca & Souza Contabilidade.  
            Todos os direitos reservados.
        <br />
            Desenvolvido por{' '}
            <a
                href="https://github.com/KaynanLuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white underline"
            >
            Nanyak
            </a>
        </div>

        </div>
    </footer>
  )
}
