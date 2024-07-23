import React from 'react'
import { CSurfer } from '../Csurfer/CSurfer'
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className='Header-root'>
                    <div className='center-navigation'><CSurfer content="Home" path="/" /></div>
                    <div className='center-navigation'><CSurfer content="servicios" path="/" /></div>
                    <div className='center-navigation'><CSurfer content="citas" path="/" /></div>
            </div>

        </>
    )
}
