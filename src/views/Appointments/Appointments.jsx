import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllAppoinmentsByI } from '../../services/apiCalls'

export const Appointments = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null
    if (passport) { token = passport.token }
    const navegate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        if (!passport) {
            navegate("/login")
        }

        const allAppoinments = async () => {
            const response = await getAllAppoinmentsByI (token)
            console.log(response)
            if(response.success){
                setAppointments(response.data)
            } else (
                setError(response.message)
            )
        };
        allAppoinments()

    }, [])

    return (
        <div>Appointments
            <div>
            {appointments.length && appointments.map((app) => {
                    return (
                        <div key={app.id}>
                            <h2>codigo de cita No.{app.id}</h2>
                            <h4>Servicio</h4>
                            <div>{app.service.name}</div>
                            <h4>Artista</h4>
                            <div>{app.artist.name}</div>
                            <h4>Fecha</h4>
                            <div>{app.due_date}</div>
                        </div>
                    )
                })}
            </div>
            <div>{error}</div>
        </div>
    )
}
