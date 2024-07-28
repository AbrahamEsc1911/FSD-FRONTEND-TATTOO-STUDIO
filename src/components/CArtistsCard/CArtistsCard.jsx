import React from 'react'
import './CArtistsCard.css'

export const CArtistsCard = ({name, email }) => {
  return (
    <>
    <div className='artists-block'>
      <div id='artists-image-block'>
        <img src="./images/appointment-img.jpg" alt="artists-image" />
      </div>
      <div id='artists-information-block'>
        <div id='artists-information-text'>
          <h1 id='name-artists'>{name}</h1>
          <p id='email-artists'>{email}@correo</p>
          <input type="button" value="Reservar" className='button-artists-reservar'/>
        </div>
        <div id='artists-information-logo'>
          <img src="./images/ser-2.svg" alt="logo-artists" id='logo-artists-size' />
        </div>
      </div>
    </div>
    </>
  )
}
