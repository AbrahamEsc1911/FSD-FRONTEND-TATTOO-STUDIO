import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../services/services.services'

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
            <div>
                {services.length && services.map((service) => {
                    return (
                        <div key={service.id}>
                            <h2>{service.name}</h2>
                            <div>{service.description}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
