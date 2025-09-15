import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Stats from '../../components/stats/Stats'
import Partners from '../../components/partners/Partners'
import Reviews from '../../components/reviews/Reviews'
import Footer from '../../components/footer/Footer'
import CTA from '../../components/cta/CTA'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-container">
            <Navbar />
            <Header />
            <About />
            <Services />
            <Stats />
            <Partners />
            <Reviews />
            <CTA />
            <Footer />
        </div>
    </div>
  )
}

export default Home