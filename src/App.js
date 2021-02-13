import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Poke from './components/Poke';
import Tbl from './components/DataTable';
import Inicio from './components/Inicio';

function App() {
  return (
  <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/poke" className="btn btn-dark">
          Poke API
        </Link>
        <Link to="/contacto" className="btn btn-dark">
          Data Table
        </Link>
      </div>
      <hr />
      <Switch>
      <Route path="/" exact>
          <Inicio/>
      </Route>
        <Route path="/poke">
          <Poke/>
        </Route>
        <Route path="/datatable">
         <Tbl/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
