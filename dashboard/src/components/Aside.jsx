import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link  , NavLink} from 'react-router-dom';
import Accueil from "./pages/Accueil";

export default function Aside(){
  return(
    <aside className="left-aside">

      <p className="">Outils</p>
      <ul>
        <li><NavLink to="/leads">Leads</NavLink></li>
        <li><NavLink to={'/stats'}>Statistic</NavLink></li>
        <li><NavLink to={'/setting'}>Parametres</NavLink></li>
      </ul>
      <p className="">Les pages</p>
        <ul>
          <li><NavLink to="/accueil">Accueil</NavLink></li>
          <li><NavLink to='/presentation'>Qui sommes-nous</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/galerie">Galerie</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>   
      <p className="">Autres</p>
      <ul>
        <li>Profile</li>
        <li>FAQ</li>
        <li>Condition general</li>
      </ul>
    </aside>
  )
}