import React, { Component } from "react";
import PokeApi from "../clases/pokeapi";

const $ = require("jquery");
require("datatables.net");

export default class Tbl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            loading: true,
        };
    }

    //option 1
    async getPokemonsData() {
        const pokeapi = new PokeApi();
        const res = await pokeapi.pagination(20,1);
        this.setState({ loading: true, pokemons: res.results });
    }

    componentDidMount() {
        this.getPokemonsData().then(() => this.sync());
    }

    sync() {
        this.$el = $(this.el);
        this.$el.DataTable({
            data: this.state.pokemons,
            columns: [
                { title: "name", data: "name" },
                { title: "url", data: "url" },
            ],
        });
    }

    render() {
        return (
            <table
                className="display hover"
                width="100%"
                ref={(el) => (this.el = el)}
            ></table>
        );
    }
}
