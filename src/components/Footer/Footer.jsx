import React from 'react'
import { CSurfer } from '../Csurfer/CSurfer.jsx';
import './Footer.css'


export const Footer = () => {

    return (
        <>
            <div className='footer'>
                <div className='footer-navigation'>
                    <div><CSurfer path="/" content="Home" /></div>
                    <div><CSurfer path="/" content="Books" /></div>
                    <div><CSurfer path="/" content="Register" /></div>
                </div>
                <div>
                    <p>All rigths reserved 2024</p>
                </div>
            </div>


        </>
    )
}