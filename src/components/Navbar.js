import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            {/* ✅ TICKER (ABOVE NAVBAR) */}
            <div className="ticker">
                <div className="ticker-track">
                    <span>
                        🌍 Tejase Traders Private Limited – Exporting premium fruits, vegetables, spices & poultry worldwide with trusted quality and fast delivery.
                    </span>
                    <span>
                        🌍 Tejase Traders Private Limited – Exporting premium fruits, vegetables, spices & poultry worldwide with trusted quality and fast delivery.
                    </span>
                </div>
            </div>

            {/* ✅ NAVBAR */}
            <nav className="navbar">
                <div className="nav-container">

                    {/* LOGO */}
                    <div className="logo">
                        <img src="/logo.png" alt="Tejase Traders" />
                    </div>

                    {/* MENU */}
                    <ul className={open ? "nav-menu active" : "nav-menu"}>

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>

                        {/* DROPDOWN */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <span>Products ▾</span>

                            {dropdown && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/category/fruits">Fruits</Link></li>
                                    <li><Link to="/category/vegetables">Vegetables</Link></li>
                                    <li><Link to="/category/spices">Spices</Link></li>
                                    <li><Link to="/category/meat">Meat</Link></li>
                                    <li><Link to="/category/seafood">Seafood</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/certificates">Certificates</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* MOBILE MENU BUTTON */}
                    <div className="menu-icon" onClick={() => setOpen(!open)}>
                        ☰
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;