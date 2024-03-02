import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componentes/Navbar'
import Body from './componentes/Body'
import Aboutme from './componentes/Aboutme'
import Skills from './componentes/Skills'
import Proyects from './componentes/Proyects'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Body/>
      <Aboutme/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
