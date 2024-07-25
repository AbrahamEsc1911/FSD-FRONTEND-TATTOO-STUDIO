const URL = "http://localhost:3380/api/services"

export const getAllServices = async () => {
    try {
        const response = await fetch(`${URL}`, {
            method: "GET",
            headers: {
                "Content-type": "aplication/json",
            }
        })

    const result = await response.json()

    return result

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}