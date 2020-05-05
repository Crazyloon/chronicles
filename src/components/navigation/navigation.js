import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// // import * as mutations from '../../store/mutations';
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../logo.svg";
import { appTitle as title, breakpoints } from "../../constants/constants";
import classNames from "classnames";

export default function Navigation({ pages }) {
  let width = useWindowSize().width;
  let [menuState, setMenuState] = useState(false);
  let menuClasses = classNames("menu", menuState === true ? "open" : "closed");

  return (
    <>
      <header className="navigation">
        <nav>
          <div className="nav-left">
            <div className="logo-container">
              <NavLink exact to="/">
                <img className="logo" src={logo} alt="website logo" />
                {title}
              </NavLink>
            </div>
          </div>
          {width > breakpoints.lg ? (
            <div className="nav-center">
              <ul className="nav-links">
                {pages.map((page, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        exact
                        to={page.location}
                        activeClassName="active"
                      >
                        {page.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          <div className="nav-right">
            {width <= breakpoints.lg ? (
              <>
                <FontAwesomeIcon
                  onClick={() => setMenuState(!menuState)}
                  className="menu-icon"
                  icon={faBars}
                  size="2x"
                />

                <div className={menuClasses}>
                  <ul className="nav-links">
                    {pages.map((page, i) => {
                      return (
                        <li key={i} onClick={() => setMenuState(false)}>
                          <NavLink
                            exact
                            to={page.location}
                            activeClassName="active"
                          >
                            {page.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </header>
    </>
  );
}
