const URL = "http://localhost:3380/api"

export const registerUsers = async (data) => {
    const response = await fetch(`http://localhost:3380/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json()
}