import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = ({data}) => {
  const banner = data.map(item => (
    <img
      key={item.id} 
      className='cursor-pointer' 
      role='presentation'
      src={item.image}
      style={{width:'100%', height: '70vh', objectFit:'cover'}}
      alt=""
    />
  ));

  return (
<AliceCarousel
    items={banner}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
  />
  
);
}
 

export default MainCarousel;
