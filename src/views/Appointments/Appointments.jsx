import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteApp, getAllAppoinmentsByI } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'

export const Appointments = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null
    if (passport) { token = passport.token }
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [error, setError] = useState("")
    const [errorDelete, setErrorDelete] = useState("")

    useEffect(() => {

        if (!passport) {
            navigate("/login")
        }

        const allAppoinments = async () => {
            const response = await getAllAppoinmentsByI(token)

            if (response.success) {
                setAppointments(response.data)
            } else (
                setError("No tienes citas pendientes")
            )
        };
        allAppoinments()

    }, [])


    const deleteAppointment = async (e) => {
        const id = e.target.name
        const response = await deleteApp(token, id)
        const appUdated = await getAllAppoinmentsByI(token)
        if (response.success) {

            if (appUdated.success) {
                setAppointments(appUdated.data);

            } else if (!appUdated.success) {
                setAppointments([]);
                setErrorDelete('No tienes citas pendientes')
            }
        } else {
            console.error("Error deleting appointment or fetching updated appointments");
        }
    }

    return (
        <div> 
            <h2>Appointments</h2>
            <div>
                {appointments.length > 0 && appointments.map((app) => {
                    return (
                        <div key={app.id}>
                            <h2>codigo de cita No.{app.id}</h2>
                            <h4>Servicio</h4>
                            <div>{app.service.name}</div>
                            <h4>Artista</h4>
                            <div>{app.artist.name}</div>
                            <h4>Fecha</h4>
                            <div>{app.due_date}</div>
                            <Cinput type="button" value="Delete" name={app.id} onClickFuntion={deleteAppointment} />
                        </div>
                    )
                })}
            </div>
            <div> {errorDelete} </div>
            <div>{error}</div>
        </div>
    )
}
