import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
const {name} = useParams()

const [info, setInfo] = React.useState([])

React.useEffect(() => {
    obtenerDatos()
}, [])

const obtenerDatos = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const poke = await data.json()
    setInfo(poke.game_indices)
}
    return (
        <div> 
        <h1>Nosotros</h1>
        <ul>
            {
                info.map(item => (
                    <li>{item.name}</li>
                ))                  
            }
        </ul>        
        </div>
    )
}

export default Pokemon
