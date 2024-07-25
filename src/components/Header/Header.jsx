import React from 'react'
import { CSurfer } from '../Csurfer/CSurfer.jsx'
import './Header.css'
import { Cinput } from '../Cinput/Cinput.jsx'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

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

    return (
        <>
            <div className='Header-root'>
                    <CSurfer content="Home" path="/" />
                    <CSurfer content="Servicios" path="/services" />
                    <CSurfer content="Perfil" path="/profile" />
                    <Cinput type="button" value="Sing In" onClickFuntion={Registro} />
                    <Cinput type="button" value="Login" onClickFuntion={Login} />
                    <Cinput type="button" value="Log Out" onClickFuntion={logout} />
            </div>

        </>
    )
}
