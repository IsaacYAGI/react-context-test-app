import { React } from 'react';
import { NavLink } from "react-router-dom";


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand" href="#">Test app</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName='active' aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" href="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link" href="#">Contacts</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/" className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
}