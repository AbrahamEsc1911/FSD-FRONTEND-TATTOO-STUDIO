import React from 'react'
import './CServicesCard.css'

export const CServicesCard = ({src, title, description}) => {
    return (
        <>
            <div className='services-card'>
                <div id='services-card-image'>{src}</div>
                <div id='services-card-title'><p>{title}</p></div>
                <div id='services-card-text'>{description}</div>
            </div>
        </>
    )
}
