import React from 'react'
import Navbar from '../src/components/Navbar/Navbar.jsx'
import About from '../src/components/About/About.jsx'
import Skills from '../src/components/Skills/Skills.jsx'
import Experience from '../src/components/Experience/Experience.jsx'
import Work from '../src/components/Work/Work.jsx'
import Education from '../src/components/Education/Education.jsx'
import Contact from '../src/components/Contact/Contact.jsx'
import Footer from '../src/components/Footer/Footer.jsx'



const App = () => {
  return (
    <div className="bg-[#050414]">

     <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
     
      <div className='relative pt-1'>
         <Navbar/>
         <About/>
         <Skills/>
         <Experience/>
         <Work/>
         <Education/>
         <Contact/>
         <Footer/>
      </div>
    </div>
  )
}

export default App
