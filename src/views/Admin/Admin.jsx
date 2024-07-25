import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/apiCalls'

export const Admin = () => {

    const passport = JSON.parse(localStorage.getItem("passport"))
    let token = null
    if (passport) { token = passport.token }

    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

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

    return (
        <>
            <h1>Usuarios</h1>
            <div>
                <div>{error}
                    {users.length && users.map((user) => {
                        return (
                            <div key={user.id}>
                                <div>{user.name}</div>
                                <div>{user.email}</div>
                                <div>{user.is_active}</div>
                                <div>{user.created_At}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
