import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../../services/apiCalls'
import { CTilte } from '../../components/CTitle/CTilte'
import './Artists.css'
import { CArtistsCard } from '../../components/CArtistsCard/CArtistsCard'

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
      <div className='body-artists-section'>
        {artists.length && artists.map((artist) => {
          return (
            <div key={artist.id}>
              <CArtistsCard name={artist.name} email={artist.email} />
            </div>
          )
        })
        }
      </div>
      <div> {error} </div>

    </>

  )
}
