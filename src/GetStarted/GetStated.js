import React from 'react'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import CustomDiv from './CustomBox'
import TredingCar from './Trending/TredingCar'
import TrendingCards from './Trending/TrendingData'
import GradientDivsPage from './MoreResone/MoreResone'
import FAQPage from './Questions.js/Questions'
import Email from './ReadyToWatch/Email'
import Footer from './Footer/Footer'

const GetStated = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <CustomDiv />
     <TrendingCards />
     <GradientDivsPage />
     <FAQPage />
     <Email />
     <Footer />
    </div>
  )
}

export default GetStated
