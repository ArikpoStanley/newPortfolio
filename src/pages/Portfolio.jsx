import React from 'react'
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
const Portfolio = () => {
    return (
     <div className='bg-[url("/site-bg.png")]'>
        <Navbar/>
       <div className=''>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
     </div>
      );
}

export default Portfolio