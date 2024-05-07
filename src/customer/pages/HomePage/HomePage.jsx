import React from 'react'
import MainCarousel from '../../components/carousal/MainCarousel'
import Cards from '../../components/cards/Cards'
import banners from '../HomePage/data/banner.json'; 
import MenClothing from '../HomePage/data/men/clothing.json'
import MenFootwear from '../HomePage/data/men/footwear.json'
import WomenClothing from '../HomePage/data/women/clothing.json'
import WomenFootwear from '../HomePage/data/women/footwear.json'


function HomePage() {
  return (
    <div>
      <MainCarousel data={banners}></MainCarousel>
      <div className='space-y-10 py-10 flex flex-col justify-center'>
        <Cards data={MenClothing} SectionName={"Men's Clothing"}/>
        <Cards data={MenFootwear} SectionName={"Men's Footwear"}/>
        <Cards data={WomenClothing} SectionName={"Women's Clothing"}/>
        <Cards data={WomenFootwear} SectionName={"Women's Footwear"}/>
       
      </div>
    </div>
  )
}

export default HomePage
