export default class PokeApi {
    constructor() {}
    async pagination(limit, offset) {
        let request = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

        const data = await fetch(request);
        const poke = await data.json();
        return poke;
    }
    async getPokemonInfo(url) {
        let request = url;
        const data = await fetch(request);
        const poke = await data.json();
        return poke.sprites.front_default;
    }
    async getPokeImageFront(url) {
        let imageurl = this.getPokemonInfo(url);
        return imageurl;
    }
}
