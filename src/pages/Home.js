import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import StickyFooter from '../components/StickyFooter'



export default function Home() {
  return (
    <div>
        <Hero />
        <Card />
        <Footer />
        <div style={{position:'sticky', bottom:0, background:'#fff', zIndex:9999, boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
        <StickyFooter />
        </div>
    </div>
  )
}