import { React,useContext } from 'react';
import { NavLink } from "react-router-dom";

import { UserContext } from '@contexts/UserContext/UserContext';


export default function Navbar(){
    const { Name } = useContext(UserContext);
    console.log(Name)
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
                <NavLink to="/home" className="nav-link" activeClassName='active' aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
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