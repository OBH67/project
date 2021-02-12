import "./css/jquery.dataTables.css"
import React, { Component }  from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class DataTable extends Component{
    
    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: data,
                columns: [
                    { data: 'name' },
                    { data: 'position' },
                    { data: 'salary' },
                    { data: 'office' }
                ]
            }
        )
    }

    componentWillUnmount() {

    }
    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el= el}>

            </table>
        </div>
    }
}