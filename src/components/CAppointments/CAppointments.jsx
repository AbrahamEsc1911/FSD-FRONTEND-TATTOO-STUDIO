import React from 'react'
import './CApointments.css'

export const CAppointments = ({src, artists, service, date, onClickFunction, name}) => {
    return (
        <>
            <div className='body-block-appointment'>
                <div id='block-img'>
                    <img src={src} alt="image-service" id='image-block-appointments' />
                </div>
                <div id='block-artist'>
                    <p className='title-tex-block-appointments'>Artista</p>
                    <h3 className='title-tex-block-appointments'>{artists}</h3>
                </div>
                <div id='block-service'>
                    <p className='title-tex-block-appointments'>Servicio</p>
                    <h3 className='title-tex-block-appointments'>{service}</h3>
                </div>
                <div id='block-date'>
                    <p className='title-tex-block-appointments'>Fecha</p>
                    <h3 className='title-tex-block-appointments'>{date}</h3>
                </div>
                <div id='block-button'>
                    <input type="button" value="Borrar" name={name} id='delete-app-button' onClick={onClickFunction} />
                </div>
            </div>
        </>
    )
}
