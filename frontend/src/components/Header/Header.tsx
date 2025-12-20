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
            <li className="cursor-pointer hover:text-slate-300">Início</li>
            <li className="cursor-pointer hover:text-slate-300">Serviços</li>
            <li className="cursor-pointer hover:text-slate-300">Sobre</li>
            <li className="cursor-pointer hover:text-slate-300">Contato</li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
