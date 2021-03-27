import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="menu">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
      </div>
      <div className="menu">
        <NavLink exact to="/fiche-utilisateur" activeClassName="nav-active">
          Fiche Utilisateur
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
