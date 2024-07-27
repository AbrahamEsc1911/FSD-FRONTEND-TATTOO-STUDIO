import React from 'react'
import './CServicesCard.css'


export const CServicesCard = ({ src, title, description, value, classname, onClickFuntion }) => {

    return (
        <>
            <div className='services-card'>
                <div id='services-card-image'>
                    <img src={src} alt="services1" />
                </div>
                <div id='services-card-title'>
                    <h2>{title}</h2>
                </div>
                <div id='services-card-text'>{description}</div>
            </div>

        </>
    )
}
