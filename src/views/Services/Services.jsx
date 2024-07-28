import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../services/services.services'
import { CServicesCard } from '../../components/CServicesCard/CServicesCard'
import './Services.css'
import { CTilte } from '../../components/CTitle/CTilte'

export const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        const brinServices = async () => {
            const response = await getAllServices()

            if (response.success) {
                setServices(response.data)
            }
        }; brinServices()
    }, [])

    return (
        <>
            <CTilte src={"./images/services-title.svg"} />
            <div className='services-cards'>
                <div className='services-card-block'>
                    {services.length && services.map((service) => {
                        return (
                            <div key={service.id} >
                                <CServicesCard src={service.id} title={service.name} description={service.description} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='services-text-image'>
                <div className='services-text-image-block'>
                    <div id='services-tex'>
                        <p>
                            Es mucho más que un estudio de tatuaje y piercing. Valencia es una ciudad abierta, cosmopolita y vanguardista, y nosotros vamos a aportar nuestro grano de arena al movimiento de la ciudad través del tattoo, piercing, exposiciones y eventos en nuestro estudio.
                        </p>
                    </div>
                    <div id='services-image'>
                        <img src="./images/flor.svg" alt="flor" />
                    </div>
                </div>
            </div>
        </>
    )
}
