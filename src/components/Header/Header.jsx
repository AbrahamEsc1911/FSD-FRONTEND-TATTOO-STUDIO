import React, { useEffect, useState } from 'react'
import { CSurfer } from '../Csurfer/CSurfer.jsx'
import './Header.css'
import { Cinput } from '../Cinput/Cinput.jsx'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let role = null
    if (passport) { role = passport.tokenData.role }


    //   useEffect(() => {

    //     const passportStoraged = JSON.parse(localStorage.getItem("passport"))
    //     if (passportStoraged) { 
    //       setPassport(passportStoraged)
    //       setRole(passportStoraged.tokenData.role)
    //       console.log("tambien la constraseña se dio cuenta del cambio")
    //     }

    //   }, [])

    const navigate = useNavigate()


    const Registro = () => {
        navigate('/register')
    }

    const Login = () => {
        navigate('/login')
    }

    const logout = () => {
        localStorage.removeItem("passport")
        navigate("/login")
    }

    const newApp = () => {
        navigate("/newapp")
    }

    // useEffect(() => {
    //   console.log("algo cambio y me di cuenta")
    // }, [navigate])


    return (
        <>
            <div className='header'>
                <div id='header-section1'>
                <img src="./images/logo-blanco.svg" alt="" className='logo'/>
                </div>
                {!passport && < div id='header-section2'>
                    <div className='nav-elements'><CSurfer content="Home" path="/home" /></div>
                    <div className='nav-elements'><CSurfer content="Servicios" path="/services" /></div>
                    <div className='nav-elements'><CSurfer content="Artists" path="/artists" /></div>
                    <div className='nav-elements'>{!passport && <Cinput type="button" value="Sign Up" onClickFuntion={Registro} className="header-button"/>}</div>
                    <div className='nav-elements'>{!passport && <Cinput type="button" value="Login" onClickFuntion={Login} className="header-button"/>}</div>
                </div>}
                {role === 3 && <div id='header-section2'>
                    <div className='nav-elements'><CSurfer content="Home" path="/home" /></div>
                    <div className='nav-elements'><CSurfer content="Servicios" path="/services" /></div>
                    <div className='nav-elements'><CSurfer content="Admin" path="/admin" /></div>
                    <div className='nav-elements'><CSurfer content="Artists" path="/artists" /></div>
                    <div className='nav-elements'><CSurfer content="Perfil" path="/profile" /></div>
                    <div className='nav-elements'><CSurfer content="Appointments" path="/appointments" /></div>
                    <div className='nav-elements'><Cinput type="button" value="Nueva Cita" onClickFuntion={newApp} className="header-button"/></div>
                    <div className='nav-elements'><Cinput type="button" value="Log Out" onClickFuntion={logout} className="header-button"/></div>
                </div>}
                {passport && role != 3 &&  <div id='header-section2'>
                    <div className='nav-elements'><CSurfer content="Home" path="/home" /></div>
                    <div className='nav-elements'><CSurfer content="Servicios" path="/services" /></div>
                    <div className='nav-elements'><CSurfer content="Artists" path="/artists" /></div>
                    <div className='nav-elements'><CSurfer content="Perfil" path="/profile" /></div>
                    <div className='nav-elements'><CSurfer content="Appointments" path="/appointments" /></div>
                    <div className='nav-elements'><Cinput type="button" value="Nueva Cita" onClickFuntion={newApp} className="header-button"/></div>
                    <div className='nav-elements'><Cinput type="button" value="Log Out" onClickFuntion={logout} className="header-button"/></div>
                </div>}
            </div >
        </>
    )
}
