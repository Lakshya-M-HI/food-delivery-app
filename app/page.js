import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import RajyaSpecial from './components/RajyaSpecial'
import FoodVariety from './components/FoodVariety'
import ConnectSection from './components/ConnectWithUs'
import KnowMoreSection from './components/KnowAboutUs'
import StatsBar from './components/Ratings'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='max-w-373 container min-h-screen mx-auto flex flex-col gap-3'>

      {/* <div className='border border-red-500'> */}
      <Banner />
      {/* </div> */}

      {/* <div className='border border-red-500'> */}
      <Header />
      {/* </div> */}
      
      {/* <div className='border border-red-500'> */}
      <HeroImage />
      {/* </div> */}

      {/* <div className='border border-red-500'> */}
      <RajyaSpecial />
      {/* </div> */}
      {/* <div className='border border-red-500'> */}
      <FoodVariety />
      {/* </div> */}
      {/* <div className='border border-red-500'> */}
      <ConnectSection />
      {/* </div> */}
      {/* <div className='border border-red-500'> */}
      <KnowMoreSection />
      {/* </div> */}
      {/* <div className='border border-red-500'> */}
      <StatsBar />
      {/* </div> */}
      {/* <div className='border border-red-500'> */}
      <Footer />
      {/* </div> */}

    </div>
  )
}
