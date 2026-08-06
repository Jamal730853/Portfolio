import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
function Home() {
  return (
    <div id='home'>
    <Hero/>
    <About/>
    <Projects />
    <Skills />
    <Contact />
    </div>
  )
}

export default Home
