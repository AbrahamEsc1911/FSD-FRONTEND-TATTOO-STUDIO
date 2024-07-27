import React, { useEffect, useState } from 'react'
import { CSurfer } from '../Csurfer/CSurfer.jsx'
import './Header.css'
import { Cinput } from '../Cinput/Cinput.jsx'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let role = null
    if(passport){role = passport.tokenData.role}
  
  
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
            <div className='Header-root'>
                    <CSurfer content="Home" path="/" />
                    <CSurfer content="Servicios" path="/services" />
                    {role === 3 && <CSurfer content="Admin" path="/admin" />}
                    <CSurfer content="Artists" path="/artists" />
                    {passport && <CSurfer content="Perfil" path="/profile" />}
                    {passport && <CSurfer content="Appointments" path="/appointments" />}
                    {!passport && <Cinput type="button" value="Sing In" onClickFuntion={Registro} />}
                    {passport && <Cinput type="button" value="Nueva Cita" onClickFuntion={newApp} /> }
                    {!passport && <Cinput type="button" value="Login" onClickFuntion={Login} /> }
                    {passport && <Cinput type="button" value="Log Out" onClickFuntion={logout} />}
            </div>
        </>  
    )
}
