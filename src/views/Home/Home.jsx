import React from 'react'
import './Home.css'
import { CServicesCard } from '../../components/CServicesCard/CServicesCard'

export const Home = () => {
  return (
    <>
      <div className='home-main-banner'>
        <img src="./images/main.png" alt="tattoo-banner" className='image-banner-main' />
      </div>
      <div className='home-info-section'>
        <div id='info-section-1'>
          <img src="./images/info-section.svg" alt="info-section-tattoo" className='image-info-section' />
        </div>
        <div id='info-section-2'>
          <p>Es historia, es experiencia, es tradición de generaciones, es pionera en Valencia, es 40 años a la vanguardia, mejorando e innovando tanto en tendencias estéticas y estilos, como en higiene y tecnología.</p>
        </div>
      </div>
      <div className='home-services-section'>
        <div className='services-card-space'>
          <div>< CServicesCard src={"./images/ser-1.svg"} title="Tatuajes del catálogo" description="tatuajes basados en diseños predefinidos en nuestro catálogo" /></div>
          <div>< CServicesCard src={"./images/ser-2.svg"} title="piercings y dilatadores" description="Servicios profesionales para la colocación de piercings y dilatadores" /></div>
          <div>< CServicesCard src={"./images/ser-3.svg"} title="Restauración y rejuvenecimiento" description="Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos" /></div>
        </div>
      </div>
    </ >
  )
}
