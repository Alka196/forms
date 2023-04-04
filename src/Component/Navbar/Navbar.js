import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faBookmark,faUser, faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return ( 
        <div id="main-nav">
            <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
  <div className="container-fluid ">
    <a className="navbar-brand navbar-white" >
         <h2>Expent</h2>
    </a>
    
    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
  <li className="nav-item custom-li">
    <a className="nav-link  " aria-current="page" href="#">
      HOME
    </a>
  </li>
  <li className="nav-item custom-li">
    <a className="nav-link " href="#">
      DASHBOARD
    </a>
  </li>
  <li className="nav-item custom-li">
    <a className="nav-link " href="#">
      VENDORS
    </a>
  </li>
  <li className="nav-item custom-li">
    <a className="nav-link " href="#">
      PROJECTS
    </a>
  </li>
</ul>
      <ul className="navbar-text">
  <li>
    <span className="fonticon icon-bookmark">
      <FontAwesomeIcon icon={faBookmark} />
    </span>
  </li>
  <li>
    <span className="fonticon icon-bell">
      <FontAwesomeIcon icon={faBell} />
    </span>
  </li>
  <li>
    <span className="fonticon icon-user">
      <FontAwesomeIcon icon={faUser} />
    </span>
  </li>
  <li className="username">
    Smith Jones <FontAwesomeIcon icon={faChevronDown} />
  </li>
</ul>

   </div>
  </div>
</nav>

        </div>
     );
}

export default Navbar;