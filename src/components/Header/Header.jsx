import React from 'react'
import { CSurfer } from '../Csurfer/CSurfer'
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className='Header-root'>
                <div>
                    <div>logo</div>
                </div>
                <div></div>
                <div id='navigation-links'>
                    <div className='center-navigation'><CSurfer content="Home" path="/" /></div>
                    <div className='center-navigation'><CSurfer content="servicios" path="/" /></div>
                    <div className='center-navigation'><CSurfer content="citas" path="/" /></div>
                </div>
            </div>

        </>
    )
}
