import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../../services/apiCalls'
import { CTilte } from '../../components/CTitle/CTilte'

export const Artists = () => {

  const [error, setError] = useState("")
  const [artists, setArtists] = useState(
    {
      name: "",
      email: ""
    }
  )

  useEffect(() => {
    const bringArtists = async () => {
      const response = await getAllArtists()

      console.log(`Respuesta server ${response}`)
      if (response.data.length === 0) {
        setError(' No artists avaliable')
      } else {
        setArtists(response.data)
      } 
    }; bringArtists();
  }, [])

  console.log(artists)

  return (
    <>

    < CTilte src={'./images/artists.svg'} />
      <div>
        {artists.length && artists.map((artist) => {
          return (
            <div key={artist.id}>
              <div>Name</div>
              <h1>{artist.name}</h1>
              <div>Email</div>
              <div>{artist.email}</div>
            </div>
          )
        })
        }
      </div>
      <div> {error} </div>

    </>

  )
}
