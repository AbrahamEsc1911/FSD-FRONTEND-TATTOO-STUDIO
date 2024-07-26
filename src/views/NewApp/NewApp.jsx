import React, { useEffect, useState } from 'react'
import { Cinput } from '../../components/Cinput/Cinput'
import { useNavigate } from 'react-router-dom'
import { Cselect } from '../../components/Cselect/Cselect'
import { getAllArtists } from '../../services/apiCalls'
import { getAllServices } from '../../services/services.services'

export const NewApp = () => {

    const navigate = useNavigate()
    const passport = JSON.parse(localStorage.getItem("passport"))
    let id = null

    passport ? id = passport.tokenData.id : navigate("/login")

    const [newAppoinment, setNewAppointment] = useState(
        {
            users_id: id,
            services_id: "",
            due_date: "",
            artists_id: ""
        }
    )

    const [services, setServices] = useState([])
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const servicesAndArtist = async () => {
            const services = await getAllServices()
            const artists = await getAllArtists()
            console.log(artists.success)
            if (services.success && services.success) {
                setServices(services.data)
                setArtists(artists.data)
            }
        };
        servicesAndArtist()
    }, [])


    console.log(artists)
    const handleEvents = (e) => {
        setNewAppointment({
            ...newAppoinment,
            [e.target.name]: e.target.value,
        });
    };

    const today = new Date().toISOString().split('T')[0];
    console.log(newAppoinment)
    return (
        <>
            <h1>Nueva Cita</h1>


            < Cinput type="date" min={today} value={newAppoinment.due_date} name="due_date" emitFuntion={handleEvents} />
            < Cselect name={"services_id"} category="Servicios" options={services} emitFunction={handleEvents}/>
            < Cselect name={"artists_id"} category="Artistas" options={artists} emitFunction={handleEvents}/>
        </>
    )
}
