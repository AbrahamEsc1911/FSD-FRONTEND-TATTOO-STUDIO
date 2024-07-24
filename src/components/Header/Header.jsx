import React from 'react'
import { CSurfer } from '../Csurfer/CSurfer.jsx'
import './Header.css'
import { Cinput } from '../Cinput/Cinput.jsx'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const navRegistro = () => {
        navigate('/register')
    }

    const navLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <div className='Header-root'>
                    <div className='center-navigation'><CSurfer content="Home" path="/" /></div>
                    <div className='center-navigation'><CSurfer content="Servicios" path="/" /></div>
                    <Cinput type="button" value="Sing in" onClickFuntion={navRegistro} />
                    <Cinput type="button" value="Log In" onClickFuntion={navLogin} />
            </div>

        </>
    )
}
