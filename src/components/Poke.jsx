import React from "react";

import PokeApi from "../clases/pokeapi";

const Poke = () => {
    const [pokemon, setPokemon] = React.useState([]);
    let pokeApi = new PokeApi();

    const [imagen, setImagen] = React.useState("");
    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        let poke = await pokeApi.pagination(100, 900);
        setPokemon(poke.results);
    };
    const onClick = async (event) => {
        let url_pokemon = event.target.id;
        let poke = await pokeApi.getPokemonInfo(url_pokemon);
        pokemon.forEach((element) => {
            if (element.url == url_pokemon) {
                element.imagen = poke;
            }
        });
        setImagen(poke);
    };

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {pokemon.map((item) => (
                    <li>
                        <li onClick={onClick} id={item.url} key={item.name}>
                            "Name:"{item.name}
                            <img src={item.imagen}></img>
                        </li>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Poke;
