import React from 'react'
import {Link} from 'react-router-dom'

const Poke = () => {

    const [pokemon, setPokemon] = React.useState([])
    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=200')
        const poke = await data.json()
        setPokemon(poke.results)
    }
    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    pokemon.map(item => (
                        <li key={item.name}>                       
                            <li>{item.name}</li>     
                        </li>  
                    ))                  
                }
            </ul>           
        </div>
    )
}

export default Poke
