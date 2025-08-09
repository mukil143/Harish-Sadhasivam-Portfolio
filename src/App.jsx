import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import FormElementTextarea from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-6 sm:px-10 md:px-12 overflow-x-hidden   text-neutral-300 antialiased selection selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <Navbar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experience/>
    <Projects/>
    <FormElementTextarea/>
    </div>
  )
}

export default App
