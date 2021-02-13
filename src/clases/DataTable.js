import React, { Component } from "react";
import axios from "axios";

const $ = require("jquery");
require("datatables.net");

export default class Tbl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  //option 1
  async getUsersData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }

  componentDidMount() {
    this.getUsersData().then(() => this.sync());
  }

  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.users, 
      columns: [
        { title: "id", data: "id" },
        { title: "Name", data: "name" },
        { title: "Username", data: "username" }
      ]
    });
  }

  render() {
    return (
      <table
        className="display"
        width="100%"
        ref={(el) => (this.el = el)}
      ></table>
    );
  }
}
