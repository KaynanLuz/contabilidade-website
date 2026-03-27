import logo from "../../assets/images/logo_-_bs.png"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <img
          src={logo}
          alt="Briança & Souza"
          className="h-20 object-contain"
        />

        {/* MENU */}
        <nav>
          <ul className="flex gap-8 text-base font-medium text-white">

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Início
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-blue-400 transition">
                Serviços
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                Sobre
              </a>
            </li>

            {/* 🔥 PROFISSIONAIS COM DROPDOWN */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-blue-400 transition">
                Colaboradoras
              </span>

              {/* DROPDOWN */}
              <ul className="absolute left-0 mt-2 w-40 rounded-md bg-white py-1 text-sm text-slate-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <li>
                  <a
                    href="#thais"
                    className="block px-3 py-1.5 hover:bg-gray-100 transition"
                  >
                    Thais Briança
                  </a>
                </li>

                <li>
                  <a
                    href="#luana"
                    className="block px-3 py-1.5 hover:bg-gray-100 transition"
                  >
                    Luana Souza
                  </a>
                </li>

              </ul>
            </li>
            
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contato
              </a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  )
}
