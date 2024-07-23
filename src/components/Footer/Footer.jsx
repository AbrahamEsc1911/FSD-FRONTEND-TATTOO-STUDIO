import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../Csurfer/CSurfer.jsx';


export const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div>
                    <div><CSurfer path="/" content="Home" /></div>
                    <div><CSurfer path="/" content="Books" /></div>
                    <div><CSurfer path="/" content="Register" /></div>
                </div>
                <div>
                    <p>All rigths reserved</p>
                </div>
            </div>


        </>
    )
}