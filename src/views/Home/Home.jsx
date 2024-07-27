import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className='home-main-banner'>
        <img src="./images/main.svg" alt="tattoo-banner" className='image-banner-main' />
      </div>
      <div className='home-info-section'>
        <div id='info-section-1'>
        <img src="./images/info-section.svg" alt="info-section-tattoo" className='image-info-section' />
        </div>
        <div id='info-section-2'>
          <p>Es historia, es experiencia, es tradición de generaciones, es pionera en Valencia, es 40 años a la vanguardia, mejorando e innovando tanto en tendencias estéticas y estilos, como en higiene y tecnología.</p>
        </div>
      </div>
    </>
  )
}
