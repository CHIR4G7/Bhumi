import React from 'react'
import Navbar from '../components/Navbar'
import CarouselFade from '../components/CarouselFade'
import Progress from '../components/Progress'
import OurMotto from '../components/OurMotto'
import HighlightsV2 from '../components/HighlightsV2'
import Aims from '../components/Aims'
import Utilize from '../components/Utilize'
import Gallery from '../components/Gallery'
import Awards from '../components/Awards'
import Donation from '../components/Donation'
import Newspaper from '../components/Newspaper'
import Seeds from '../components/Seeds'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonial'
import testimonials from '../data/testimonial-data'

const ClientPage = () => {
  return (
    <div className=' overflow-x-hidden'>
        <Navbar />
        <CarouselFade />
        <OurMotto />
        <HighlightsV2 />
        <Aims />
        <Testimonials testimonials={testimonials}/>
        <Utilize />
        <Gallery />
        <Awards />
        <Donation />
        <Newspaper />
        <Seeds />
        <Footer />
    </div>
  )
}

export default ClientPage