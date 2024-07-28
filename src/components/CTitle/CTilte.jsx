import React from 'react'
import './CTitle.css'

export const CTilte = ({src}) => {
    return (
        <>
            <div className='general-title-page'>
                <div id='title-block'>
                    <img src={src} alt="new-appointment" id='title-image' />
                </div>
            </div>
        </>
    )
}
