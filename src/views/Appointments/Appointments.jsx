import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteApp, getAllAppoinmentsByI } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Appoinments.css'

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
        <>
            <div className='appointments'>
                <div id='appointments-block'>
                    <img src="./images/my-app.svg" alt="new-appointment" id='appointment-title-image' />
                </div>
            </div>
            <div className='appointments-body'>
                <div className='appointments-body-block'>
                    <div id='body-block-text'>
                        <h2>Todas las citas</h2>
                    </div>

                    <div>
                        {appointments.length > 0 && appointments.map((app) => {
                            return (
                                <div key={app.id}>
                                    <div className='body-block-appointment'>
                                        <div id='block-img'>
                                            <img src="./images/flor.svg" alt="image-service" id='image-block-appointments' />
                                        </div>
                                        <div id='block-artist'>
                                            <p className='title-tex-block-appointments'>Artista</p>
                                            <h3 className='title-tex-block-appointments'>{app.artist.name}</h3>
                                        </div>
                                        <div id='block-service'>
                                            <p className='title-tex-block-appointments'>Servicio</p>
                                            <h3 className='title-tex-block-appointments'>{app.service.name}</h3>
                                        </div>
                                        <div id='block-date'>
                                            <p className='title-tex-block-appointments'>Fecha</p>
                                            <h3 className='title-tex-block-appointments'>{app.due_date}</h3>
                                        </div>
                                        <div id='block-button'>
                                            < Cinput type="button" value="Borrar" className="delete-app-button" name={app.id} onClickFuntion={deleteAppointment} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>


            <div> {errorDelete} </div>
            <div>{error}</div>
        </>
    )
}
