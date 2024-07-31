import React, { useState } from 'react'
import './Login.css'
import { Cinput } from '../../components/Cinput/Cinput.jsx'
import { loginUsers } from '../../services/apiCalls.js'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { CTilte } from '../../components/CTitle/CTilte.jsx'

export const Login = () => {

    const [hideContent, sethideContent] = useState(false)
    const [passwordLenght, setpasswordLenght] = useState(false)
    const [backMessage, setBackMessage] = useState(false)
    const [credentials, setCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState("")
    const handleChange = (e) => {
        setCredentials(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const login = async () => {

        if (credentials.email.length === 0 || credentials.password.length === 0) {
            return sethideContent(true)
        } else if (credentials.email.length > 0 && credentials.password.length > 0) {
            sethideContent(false)
        }

        if (credentials.password.length < 8 || credentials.password.length > 12) {
            return setpasswordLenght(true)
        } else if (credentials.password.length > 7 || credentials.password.length < 12) {
            setpasswordLenght(false)
        }

        const response = await loginUsers(credentials)

        if (response.success) {
            const tokenDecoded = jwtDecode(response.token)
            const passport = {
                token: response.token,
                tokenData: tokenDecoded
            }

            navigate("/profile")

            localStorage.setItem("passport", JSON.stringify(passport))

        } else {
            setErrorLogin(response.message)
            setBackMessage(true)
        }
    }

    return (
        <>
            <CTilte src={"./images/login.svg"} />

            <div className='login-body'>
                <div className='login-body-block'>
                    <p id='simple-text-login'>Ingresa para reservar, actualizar perfil y más</p>
                    <div>< Cinput className={"classic-input"} type="email" name="email" placeholder="Correo" emitFuntion={handleChange} /></div>
                    <div>< Cinput className={"classic-input"} type="password" name="password" placeholder="Contraseña" emitFuntion={handleChange} /></div>
                    <p className={hideContent ? "" : "hidden-content"}>El correo y la contraseña son obligatorios</p>
                    <p className={passwordLenght ? "" : "hidden-content"}>la contraseña debe ser mayor a 8 y menor a 12</p>
                    <p className={backMessage ? "" : "hidden-content"}> {errorLogin} </p>
                    <div>< Cinput className="classic-login-button" type="button" name="password" value="Acceder" onClickFuntion={login} /></div>
                </div>
            </div>

        </>
    )
}
