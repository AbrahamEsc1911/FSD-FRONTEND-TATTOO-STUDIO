import React, { useState } from 'react'
import { Cinput } from '../../components/Cinput/Cinput.jsx'
import './Register.css'
import { registerUsers } from '../../services/apiCalls.js'
import { useNavigate } from 'react-router-dom'
import { CTilte } from '../../components/CTitle/CTilte.jsx'

export const Register = () => {

  const navigate = useNavigate()

  const [registerData, setregisterData] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )

  const [hideContent, sethideContent] = useState(false)

  const [passwordLenght, setpasswordLenght] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    setregisterData(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  const register = async () => {

    if (registerData.email.length === 0 || registerData.password.length === 0) {
      return sethideContent(true)
    } else if (registerData.email.length > 0 && registerData.password.length > 0) {
      sethideContent(false)
    }

    if (registerData.password.length < 8 || registerData.password.length > 12) {
      return setpasswordLenght(true)
    } else if (registerData.password.length > 7 || registerData.password.length < 12) {
      setpasswordLenght(false)
    }

    const response = await registerUsers(registerData)

    if (response.success) {
      navigate("/login")
    } else {
      return setErrorMessage(response.message)
    }

  }

  return (
    <>
      <CTilte src={"./images/signup.svg"} />
      <div className='signup-body'>
        <div className='signup-body-block'>
          <p>Registrate y accede a todos nuestros servicios</p>
          <div><Cinput className="classic-input" type="text" name="email" placeholder="Email (Opcional)" emitFuntion={handleChange} /></div>
          <div><Cinput className="classic-input" type="email" name="email" placeholder="email" emitFuntion={handleChange} /></div>
          <div><Cinput className="classic-input" type="password" name="password" placeholder="password" emitFuntion={handleChange} /></div>
          <p className={hideContent ? "" : "hidden-content"}>El correo y la contraseña son obligatorios</p>
          <p className={passwordLenght ? "" : "hidden-content"}>la contraseña debe ser mayor a 8 y menor a 12</p>
          <p >{errorMessage}</p>
          <div><Cinput className="classic-register-button" type="button" name="register" value="Sign Up" onClickFuntion={register} /></div>
        </div>
      </div>

    </>
  )
}
