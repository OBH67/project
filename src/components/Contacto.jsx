import React from 'react'
import { DataTable } from './DataTable'

data = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]

const Contacto = () => {
    return (
        <div>
            <h1>Contacto</h1>
            <DataTable data={this.data}>
            </DataTable>
        </div>
    )
  }

export default Contacto
