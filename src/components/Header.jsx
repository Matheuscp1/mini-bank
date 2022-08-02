import "./Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearchDollar,
  faDollarSign,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = (props) => (
  <div className="selector-menu">
    <Link to="/">
      <FontAwesomeIcon icon={faSearchDollar} size="2x" color="white" />
    </Link>
    <Link to="/deposit">
      <FontAwesomeIcon icon={faCircleDollarToSlot} size="2x" color="white" />
    </Link>
    <Link to="/withdraw">
      <FontAwesomeIcon icon={faDollarSign} size="2x" color="white" />
    </Link>
  </div>
);

export default Header;
