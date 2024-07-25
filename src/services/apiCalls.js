const URL = "http://localhost:3380/api"

export const registerUsers = async (data) => {
    const response = await fetch(`${URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json()
}

export const loginUsers = async (credenials) => {
    const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(credenials)
    })

    return await response.json()
}

export const getProfile = async (token) => {
    try {
        const response = await fetch(`${URL}/users/profile`, {
            method: "GET",
            headers: {
                "Content-type": "aplication/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const result = await response.json()

        // if (!result.success) {
        //     throw new Error(`HTTP error, status ${result.status}`)
        // }

        return result

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const updateProfile = async (token, data) => {
    
    try {
        const response = await fetch(`${URL}/users/profile`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        
        console.log(result.message)

        // if(!result.success){
        //     throw new Error(`Error HTTP, info ${result.message} `)
        // }
       
        return result

    } catch (error) {
        console.error(error)
    }
    
}

export const getAllUsers = async (token) => {
    try {
        const response = await fetch(`${URL}/users`, {
            method: "GET",
            headers: {
                "Content-type": "aplication/json",
                "Authorization": `Bearer ${token}`
            }
        })

        // if(response.status === 400){
        //     throw new Error(`status ${response.status} and ${response.message}`)
        // }
        return await response.json()
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const deleteUsersById = async (id, token) => {
    
    const response = await fetch (`${URL}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json()
}