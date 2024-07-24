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

export const loginUsers =async (credenials) => {
    const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(credenials)
    })

    return await response.json()
}