import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';

function App() {
  return (
  <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/nosotros" className="btn btn-dark">
          Nosotros
        </Link>
        <Link to="/contacto" className="btn btn-dark">
          Contacto
        </Link>
      </div>
      <hr />
      <Switch>
      <Route path="/" exact>
          <Inicio/>
      </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
