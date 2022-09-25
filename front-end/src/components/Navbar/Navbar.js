import React, { useState, useContext } from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar.js";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider.js";
import { Link } from "react-router-dom";
import styled from "styled-components";






const Navbar = () => {
    const { currentUser } = useContext(AuthContext);

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    if (currentUser._id === 0) {

    }

    const menuList = MenuList.map(({ url, title, viewauth, viewAlways }, index) => {
        // return (

        //     <li key={index} onClick={handleClick}>
        //         <NavLink to={url} className="active">{title}</NavLink>
        //     </li>
        // );
        return ((viewAlways || (viewauth && currentUser._id != null) || (!viewauth && currentUser._id === null)) && (<li key={index} onClick={handleClick}>
            <NavLink to={url} className="active">{title}</NavLink>
        </li>));

    });

    return (
        <nav className="fixedNavTop">
            <Link to="/" className="logo"></Link>
            <SearchBar />

            <div className="menu-icon" onClick={handleClick}>

                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>


        </nav >
    );
};

export default Navbar;