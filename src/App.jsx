import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroSection from './HeroSection'
import About from './About'
import Footer from './Footer'
import CardSection from './CardSection'

import './App.css'

function App() {

  return (
    <>
    <HeroSection />
    <About />
    <CardSection />
    <Footer />
    </>
  )
}

export default App
