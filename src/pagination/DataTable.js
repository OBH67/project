import React, { Component } from "react";
import PokeApi from "../clases/pokeapi";
import Pagination from "../clases/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class Tbl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            loading: true,
            limit: 10,
            offset: 0,
            start: true,
        };
        this.pagination = new Pagination(
            PokeApi,
            this.state.limit,
            this.state.offset
        );
    }

    async pokeMasterOmega3(llamada = "omega") {
        switch (llamada) {
            case "next": {
                await this.pagination.nextT();
                break;
            }
            case "previous": {
                await this.pagination.previousT();
                break;
            }
            default: {
                await this.pagination.getApiData();
                break;
            }
        }
        this.setState({
            loading: true,
            pokemons: this.pagination.currentValues,
        });
    }
    async checkStart() {
        if (this.state.start) {
            await this.pokeMasterOmega3();
            this.setState({ start: false });
        }
    }
    componentDidMount() {
        this.checkStart();
    }

    handleNext = async () => {
        await this.pokeMasterOmega3("next");
    };
    handlePrevious = async () => {
        await this.pokeMasterOmega3("previous");
    };

    handleCase10 = async () => {
        this.setState({
            limit: 10,
        });
        this.pagination.setlimit(10);
        console.log("modificar 10");
    };
    handleCase50 = async () => {
        this.setState({
            limit: 50,
        });

        this.pagination.setlimit(50);
        console.log("modificar 50");
    };
    handleCase100 = async () => {
        this.setState({
            limit: 100,
        });

        this.pagination.setlimit(100);
        console.log("modificar 100");
    };
    handleSelect = async (e) => {
        switch (e) {
            case "option-10": {
                this.handleCase10();
                break;
            }
            case "option-50": {
                this.handleCase50();
                break;
            }
            case "option-100": {
                this.handleCase100();
                break;
            }
        }
        await this.pokeMasterOmega3();
    };

    omegarenderItem = (item) => {
        return (
            <>
                <div className="bg-color-400">Name: {item.name}</div>
                <div>Url: {item.url}</div>
            </>
        );
    };
    render() {
        return (
            <>
                <ul>
                    {this.state.pokemons.map((item) => {
                        return this.omegarenderItem(item);
                    })}
                </ul>
                
                <button onClick={this.handlePrevious}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
                <DropdownButton
                    alignRight
                    title="Colums"
                    onSelect={this.handleSelect}
                    id="dropdown-menu-align-center"
                >
                    <Dropdown.Item eventKey="option-10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="option-50">50</Dropdown.Item>
                    <Dropdown.Item eventKey="option-100">100</Dropdown.Item>
                    <Dropdown.Divider />
                </DropdownButton>
            </>
        );
    }
}
