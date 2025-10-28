import React from "react";
import { Menu } from "./model-navbar";
import { Link } from "react-router-dom";
import "./style-navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      {Menu.map((item, index) => {
        return (
          <span key={index}>
            <Link to={item.linkTo}>{item.contain}</Link>
          </span>
        );
      })}
    </nav>
  );
};
