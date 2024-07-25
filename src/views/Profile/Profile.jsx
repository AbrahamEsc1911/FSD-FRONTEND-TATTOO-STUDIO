import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile, updateProfile } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Profile.css'

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
            <h1>Profile</h1>
            <p className={hidde ? "hidden-content" : ""}>name {user.name} </p>
            <div className={hidde ? "" : "hidden-content"}><Cinput type="text" name="name" placeholder="name" emitFuntion={handleChange} /></div>
            <p className={hidde ? "hidden-content" : ""}>email {user.email} </p>
            <div className={hidde ? "" : "hidden-content"}><Cinput type="text" name="email" placeholder="email" emitFuntion={handleChange} /></div>
            <p className={hiddeWarning ? "" : "hidden-content-warnig"}>Rellena al menos uno de los campos para actualizar tus datos</p>
            <p> {errorUpdate} </p>
            <p>Con nosotros desde {user.created_at} </p>
            < Cinput type="button" name="edit" value={hidde ? "cancel" : "edit profile"} onClickFuntion={editButton} />
            <div className={hidde ? "" : "hidden-content"}>< Cinput type="button" name="edit" value="guardar" onClickFuntion={updateData} /></div>
        </>
    )
}
