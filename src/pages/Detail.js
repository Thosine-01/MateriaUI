import React from 'react'
import HouseDetail from '../components/HouseImage'
import HouseInfo from '../components/HouseInfo'
import HouseReview from '../components/HouseReview'
import Footer from '../components/Footer'
export default function Details() {
  return (
    <div>
        <HouseDetail />
        <HouseInfo />
        <HouseReview />
        <Footer />
    </div>
  )
}