import React, { useState } from 'react'
import { Cinput } from '../../components/Cinput/Cinput'
import { useNavigate } from 'react-router-dom'

export const NewApp = () => {

    const navigate = useNavigate()
    const passport = JSON.parse(localStorage.getItem("passport"))
    let id = null

    passport ? id = passport.tokenData.id : navigate("/login")

    console.log(id)
    const [newAppoinment, setNewAppointment] = useState(
        {
            users_id: id,
            services_id: "",
            due_date: "",
            artists_id: ""
        }
    )

    const handleEvents = (e) => {
        setNewAppointment({
            ...newAppoinment,
            [e.target.name]: e.target.value,
        });
    };
    console.log(newAppoinment)

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <h1>Nueva Cita</h1>

            < Cinput type="date" min={today} value={newAppoinment.due_date} name="due_date" emitFuntion={handleEvents} />
            
        </>
    )
}
