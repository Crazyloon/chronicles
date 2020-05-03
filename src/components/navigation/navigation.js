// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// import * as mutations from '../../store/mutations';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../logo.svg';
import {appTitle as title} from '../../constants/constants';

export default function Navigation() {
  return (
    <header className='navigation'>
      <nav className=''>
        <div className='nav-left'>
          <a href='/'>
            <div className='logo-container'>
              <img className='logo' src={logo} />
              {title}
            </div>
          </a>
        </div>
        <div className='nav-right'>
          <ul className='nav-links'>
            <li>
              <a className='' href='/'>
                Home
              </a>
            </li>
            <li>
              <a  className='' href='../howtocare.html'>
                How to Care
              </a>
            </li>
            <li className='active'>
              <a  className='' href='/examples/layout-example.html'>
                Layout Examples
              </a>
            </li>
            <li>
              <a  className='' href='#'>
                Last Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

// const mapStateToProps = ({session}) => ({
//   isAuthenticated: session.isAuthenticated === mutations.AUTHENTICATED
// });
// const mapDispatchToProps = dispatch => ({
//   logOut(e){
//     e.preventDefault();
//     dispatch(mutations.requestDeauthenticateUser());
//   }
// });

// export const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);