import React, { useEffect, useState } from 'react'
import { Cinput } from '../../components/Cinput/Cinput'
import { useNavigate } from 'react-router-dom'
import { Cselect } from '../../components/Cselect/Cselect'
import { createAppointments, getAllArtists } from '../../services/apiCalls'
import { getAllServices } from '../../services/services.services'
import './NewApp.css'

export const NewApp = () => {

    const navigate = useNavigate()
    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null

    passport ? token = passport.token : navigate("/login")

    const [newAppointment, setNewAppointment] = useState(
        {
            services_id: "",
            due_date: "",
            artists_id: ""
        }
    )

    const [services, setServices] = useState([])
    const [artists, setArtists] = useState([])
    const [message, setMessage] = useState("")
    const [hiddeContent, setHiddeContent] = useState(false)

    useEffect(() => {
        const servicesAndArtist = async () => {
            const services = await getAllServices()
            const artists = await getAllArtists()

            if (services.success && services.success) {
                setServices(services.data)
                setArtists(artists.data)
            }
        };
        servicesAndArtist()
    }, [])

    const handleEvents = (e) => {
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };

    const createNewApp = async () => {

        if (newAppointment.services_id.length <= 0 || newAppointment.artists_id.length <= 0 || newAppointment.due_date.length <= 0) {
            return setMessage('Todos los campos son obligatorios')
        }

        setMessage("")
        const response = await createAppointments(token, newAppointment)
        if (response.success) {
            setHiddeContent(true)
        }
        setMessage(response.message)
    }

    const allAppointments = () => {
        navigate("/appointments")
    }

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div className='appointment-title'>
                <div id='appointment-title-block'>
                    <img src="./images/appoint-tittle.svg" alt="new-appointment" id='appointment-title-image' />
                </div>
            </div>
            <div className='appointment-body'>
                    <div className='appoint-body-block'>
                        <div id='appointment-body-form'>
                            <p className='text-appointment-crate'>Agenda una nueva cita con nosotros</p>
                            <div>< Cinput className="form-date" type="date" min={today} value={newAppointment.due_date} name="due_date" emitFuntion={handleEvents} /></div>
                            <div>< Cselect className="form-services" name={"services_id"} category="Servicios" options={services} emitFunction={handleEvents} /></div>
                            <div>< Cselect className="form-artists" name={"artists_id"} category="Artistas" options={artists} emitFunction={handleEvents} /></div>
                            <div id='appointment-warning'> {message} </div>
                            <div className={hiddeContent ? "hidden-content" : ""}><Cinput className="app-main-button" type="button" value="Guardar" onClickFuntion={createNewApp} /></div>
                            <div><Cinput className="app-secundary-button" type="button" value={hiddeContent ? "ver citas" : "volver"} onClickFuntion={allAppointments} /></div>
                        </div>
                        <div id='appointment-body-img'>
                            <img src="./images/appointment-img.jpg" alt="appointment-image.tattoo" id='app-image' />
                        </div>
                    </div>
            </div>



        </>
    )
}
