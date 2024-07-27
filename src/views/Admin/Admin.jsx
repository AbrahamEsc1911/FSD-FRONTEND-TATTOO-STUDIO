import React, { useEffect, useState } from 'react'
import { deleteUsersById, getAllUsers } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Admin.css'
import { useNavigate } from 'react-router-dom'

export const Admin = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null
    if (passport) { token = passport.token }
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (!passport) {
            navigate("*")
        }

        const brinUsers = async () => {
            const response = await getAllUsers(token)
            if (response.success) {
                setUsers(response.data)

            } else {
                setError(response.message)
            }
        };
        brinUsers()

    }, [])

    const deleteUser = async (e) => {
        const id = e.target.name
        const respose = await deleteUsersById(id, token)
        if (respose.success) {
            const allUsersUpdated = await getAllUsers(token)
            setUsers(allUsersUpdated.data)
        } else {
            alert("No se pudo borrar el usuario, tiene cosas pendientes")
        }
    }

    return (
        <>
            <h1>Usuarios</h1>
            <div>
                {users.length && users.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.is_active}</div>
                            <div>{user.created_At}</div>
                            <div>{user.role.name}</div>
                            <div className={user.role.name === "user" ? "" : "hidde-content"}><Cinput type="button" value="delete" name={user.id} onClickFuntion={deleteUser} /></div>
                        </div>
                    )
                })}
            </div>
            <div>{error}</div>
        </>
    )
}
