import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile, updateProfile } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Profile.css'
import { CTilte } from '../../components/CTitle/CTilte'

export const Profile = () => {

    const passport = JSON.parse(localStorage.getItem('passport'))
    const navigate = useNavigate()
    let token = null
    if (passport) { token = passport.token }
    const [hidde, setHidde] = useState(false)
    const [hiddeWarning, setHiddeWarning] = useState(false)
    const [errorUpdate, setErrorUpdate] = useState("")
    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            created_at: ""
        }
    )

    const [userUpdate, setUserUpdate] = useState(
        {
            name: "",
            email: ""
        }
    )

    useEffect(() => {
        if (!passport) {
            navigate("../login")

        } else {

            const UserProfile = async () => {
                const response = await getProfile(token)
                setUser(response.data)
            }
            UserProfile()
        }
    }, [])

    const handleChange = (e) => {
        setUserUpdate(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }

    const editButton = () => {
        setHidde(!hidde)
    }

    const updateData = async () => {

        if (userUpdate.name.length === 0 && userUpdate.email.length === 0) {
            return setHiddeWarning(true)

        } else {
            setHiddeWarning(false)

        }

        if (userUpdate.name.length === 0) {

            const { name, ...nuevoUserUpdate } = userUpdate
            const result = await updateProfile(token, nuevoUserUpdate)
            if (result.success) {
                const dataUpdated = await getProfile(token)
                setUser(dataUpdated.data)
                setHidde(false)
                setErrorUpdate(result.message)
                setErrorUpdate("")
            }

        } else if (userUpdate.email.length === 0) {

            const { email, ...nuevoUserUpdate } = userUpdate
            const result = await updateProfile(token, nuevoUserUpdate)
            if (result.success) {
                const dataUpdated = await getProfile(token)
                setUser(dataUpdated.data)
                setHidde(false)
                setErrorUpdate("")

            } else {
                setErrorUpdate(result.message)
            }
        }
        else {

            const result = await updateProfile(token, userUpdate)
            if (result.success) {
                const dataUpdated = await getProfile(token)
                setUser(dataUpdated.data)
                setHidde(false)
                setErrorUpdate("")
            } else {
                setErrorUpdate(result.message)

            }
        }
    }
    return (
        <>
            <CTilte src={"./images/profile.svg"} />
            <div className='profile-body'>
                <div className='profile-body-block'>
                    <div id='sides-profile-block-1'>
                        <img src="./images/profile-picture.jpg" alt="profile-picture" id='profile-picture'/>
                    </div>
                    <div id='sides-profile-block-2'>
                        <h2 className={hidde ? "hidden-content" : ""} id='profile-main-text'>{user.name} </h2>
                        <div className={hidde ? "" : "hidden-content"}><Cinput className="edit-input" type="text" name="name" placeholder="name" emitFuntion={handleChange} /></div>
                        <p className={hidde ? "hidden-content" : ""} id='profile-tittle-text'>Correo</p>
                        <h3 className={hidde ? "hidden-content" : ""} id='profile-second-text'>{user.email} </h3>
                        <div className={hidde ? "hidden-content" : ""} id='line-division-text'></div>
                        <div className={hidde ? "" : "hidden-content"}><Cinput className="edit-input" type="text" name="email" placeholder="email" emitFuntion={handleChange} /></div>
                        <p className={hiddeWarning ? "" : "hidden-content-warnig"}>Rellena al menos uno de los campos para actualizar tus datos</p>
                        <p id='profile-tittle-text'>Con nosotros desde </p>
                        <p id='profile-tittle-text'>{user.created_at} </p>
                        <div className={hidde ? "" : "hidden-content"}>< Cinput className="edit-profile-button" type="button" name="edit" value="guardar" onClickFuntion={updateData} /></div>
                        < Cinput className={hidde ? "cancel-profile-button" : "edit-profile-button"} type="button" name="edit" value={hidde ? "Cancel" : "Edit profile"} onClickFuntion={editButton} />
                        <p> {errorUpdate} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
