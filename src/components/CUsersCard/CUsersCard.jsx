import React from 'react'
import './CUsersCard.css'

export const CUsersCard = ({name, email, role, date, userId, onClickFunction}) => {
  return (
    <>
     <div className='admin-users-block'>
                <div id='admin-user-block-img'>
                    <img src="./images/ser-2.svg" alt="user-profile-image" id='image-admin-users-block' />
                </div>
                <div className='admin-user-block-tex'>
                    <div>
                        <p className='admin-user-block-text'>Nombre</p>
                        <h3 className='admin-user-block-title'>{name}</h3>
                    </div>
                    <div>
                        <p className='admin-user-block-text'>Correo</p>
                        <h3 className='admin-user-block-title'>{email}</h3>
                    </div>
                </div>
                <div className='admin-user-block-tex'>
                    <div>
                        <p className='admin-user-block-text'>Rol</p>
                        <h3 className='admin-user-block-title'>{role}</h3>
                    </div>
                    <div>
                        <p className='admin-user-block-text'>Fecha de Alta</p>
                        <h3 className='admin-user-block-title'>{date}</h3>
                    </div>
                </div>
                <div className='admin-user-block-button'>
                    <div>
                        <input type="button" value="Borrar" name={userId} onClick={onClickFunction} id='button-delete-user'/>
                    </div>
                </div>
            </div>
    </>
  )
}
