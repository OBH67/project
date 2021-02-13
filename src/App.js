import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Poke from './components/Poke';
import Inicio from './components/Inicio';
import Datatable from './components/Datatable';

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
        <Link to="/datatable" className="btn btn-dark">
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
          <Datatable/>         
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
