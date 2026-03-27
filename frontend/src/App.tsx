import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { About }  from './components/About/About'
import { Contact } from './components/Contact/Contact'
//import { Footer }  from './components/Footer/Footer' 
import { Toaster } from "react-hot-toast"
import { Thais }  from './components/Thais/Thais'
import { Luana }  from './components/Luana/Luana'

function App() {
  return (
    <>
        <Toaster 
          position='top-right'
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#fff",
            },
          }}  
        />

        <Header />
        <Hero />
        <Services />
        <About />
        <Thais />
        <Luana />
        <Contact />
    </>
  )
}

export default App
