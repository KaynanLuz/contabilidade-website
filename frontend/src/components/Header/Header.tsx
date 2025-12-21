export function Header() {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo / Nome */}
        <div className="text-xl font-bold">
          Contabilidade Profissional
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-slate-300">
                Início
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-slate-300">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-slate-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#equipe" className="hover:text-slate-300">
                Profissionais
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-slate-300">
                Contato
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
