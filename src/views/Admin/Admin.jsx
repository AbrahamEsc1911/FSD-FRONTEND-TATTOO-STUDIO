import React, { useEffect, useState } from 'react'
import { deleteUsersById, getAllUsers } from '../../services/apiCalls'
import { Cinput } from '../../components/Cinput/Cinput'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import { CTilte } from '../../components/CTitle/CTilte'
import { CUsersCard } from '../../components/CUsersCard/CUsersCard'

export const Admin = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null
    if (passport) { token = passport.token }
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (!passport || passport.tokenData.role !== 3) {
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
            <CTilte src={"./images/wellcome-admin.svg"} />
            <div className='admin-users-body'>
                <div className='admin-users-body-block'>
                    <div>
                        {users.length && users.map((user) => {
                            return (
                                <div key={user.id}>
                                    <CUsersCard name={user.name} email={user.email} role={user.role.name} date={user.created_at} userId={user.id} onClickFunction={deleteUser} />
                                </div>)
                        })}
                    </div>
                    <div>{error}</div>
                </div>
            </div>
        </>
    )
}
