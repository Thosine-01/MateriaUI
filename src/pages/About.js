import React from 'react'
import AboutHero from '../components/AboutHero'
import MyStory from '../components/MyStory'
import Reviews from '../components/Review'
import Team from '../components/Team'

export default function About() {
  return (
    <div>
        <AboutHero />
        <MyStory />
        <Reviews />
        <Team />
    </div>
  )
}
