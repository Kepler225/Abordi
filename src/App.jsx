import { useState } from 'react'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Work from './Components/Work'
import Abordi from './Components/Abordi'
import Expert from './Components/Expert'
import Profession from './Components/Profession'
import Stories from './Components/Stories'
import Mission from './Components/Mission'
import Frequent from './Components/Frequent'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Work/>
   <Abordi/>
   <Expert/>
   <Profession/>
   <Stories/>
   <Mission/>
   <Frequent/>
   <Footer/>
    </>
  )
}

export default App
