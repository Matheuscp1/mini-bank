import "./Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearchDollar,
  faDollarSign,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
const Header = (props) => (
  <div className="selector-menu">
    <NavLink  to="/" >
      <FontAwesomeIcon icon={faSearchDollar} size="2x" color="white" />
    </NavLink>
    <NavLink to="/deposit" >
      <FontAwesomeIcon icon={faCircleDollarToSlot} size="2x" color="white" />
    </NavLink>
    <NavLink to="/withdraw" >
      <FontAwesomeIcon icon={faDollarSign} size="2x" color="white" />
    </NavLink>
  </div>
);

export default Header;
