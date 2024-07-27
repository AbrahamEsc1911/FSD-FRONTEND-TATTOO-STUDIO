import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../services/services.services'
import { CServicesCard } from '../../components/CServicesCard/CServicesCard'
import './Services.css'

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
            <div className='services-title'>
                <div className='services-title-block'>
                    <img src="./images/services-title.svg" alt="services-tattoo" id='services-title-image' />
                </div>
            </div>
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

            </div>
        </>
    )
}
