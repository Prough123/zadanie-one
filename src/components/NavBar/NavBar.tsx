import React from 'react';
import ModuleNavbar from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(

        <nav className={ModuleNavbar.nav}>
            <NavLink className={ModuleNavbar.nav_item} to="/prejunior">prejunior</NavLink>
            <NavLink className={ModuleNavbar.nav_item} to="/juniour">juniour</NavLink>
            <NavLink className={ModuleNavbar.nav_item} to="/juniour+">juniour+</NavLink>
        </nav>


    )
}

export default NavBar;