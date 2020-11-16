import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/context";

export const Header: React.FC = () => {
  const { toggleCart } = useContext(MainContext);
  return (
    <header className="site-header">
      <div className="contact-wrapper">
        <a href="/#">+380(63)6623175</a>
        <a href="/#">+380(63)6623175</a>
      </div>
      <nav className="main-nav-wrap">
        <ul>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/sale">Акции</Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleCart}>
              Корзина
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
