import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Profile.css'

export const Profile = () => {

    const passport = JSON.parse(localStorage.getItem('passport'))
    const navigate = useNavigate()
    const [hidde, setHidde] = useState(false)
    const [userData, setUserData] = useState(
        {
            name: "",
            email: "",
            created_at: ""
        }
    )

    const [dataUpdate, setDataUpdate] = useState(
        {
            name: "",
            email: ""
        }
    )

    useEffect(() => {
        if (!passport) {
            navigate("login")
        } else {

            const UserProfile = async () => {
                const response = await getUserProfile(passport.token)
                setUserData(response.data)
            }

            UserProfile()
        }
    }, [])

    const handleChange = (e) => {
        setDataUpdate(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }
    
    const editButton = () => {
        setHidde(!hidde)
    }

    return (
        <>
            <h1>Profile</h1>
            <p className={hidde ? "hidden-content" : ""}>name {userData.name} </p>
            <div className={hidde ? "" : "hidden-content"}><Cinput type="text" name="name" placeholder="name" emitFuntion={handleChange} /></div>
            <p className={hidde ? "hidden-content" : ""}>email {userData.email} </p>
            <div className={hidde ? "" : "hidden-content"}><Cinput type="text" name="email" placeholder="email" emitFuntion={handleChange} /></div>
            <p>Con nosotros desde {userData.created_at} </p>
            < Cinput type="button" name="edit" value={hidde ? "cancel" : "edit profile"} onClickFuntion={editButton} />
        </>
    )
}
