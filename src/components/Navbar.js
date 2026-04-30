import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const menuRef = useRef();

    /* 👉 CLOSE MENU ON OUTSIDE CLICK */
    useEffect(() => {

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (
        <>
            {/* TICKER */}
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

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-container" ref={menuRef}>

                    {/* LOGO */}
                    <div className="logo">
                        <Link to="/" onClick={() => setOpen(false)}>
                            <img src="/logo.png" alt="Tejase Traders" />
                        </Link>
                    </div>

                    {/* MENU */}
                    <ul className={open ? "nav-menu active" : "nav-menu"}>

                        <li>
                            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        </li>

                        <li>
                            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                        </li>

                        {/* DROPDOWN */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <span>Products ▾</span>

                            {dropdown && (
                                <ul className="dropdown-menu">

                                    <li>
                                        <Link to="/category/fruits" onClick={() => setOpen(false)}>Fruits</Link>
                                    </li>

                                    <li>
                                        <Link to="/category/vegetables" onClick={() => setOpen(false)}>Vegetables</Link>
                                    </li>

                                    <li>
                                        <Link to="/category/spices" onClick={() => setOpen(false)}>Spices</Link>
                                    </li>

                                    <li>
                                        <Link to="/category/meat" onClick={() => setOpen(false)}>Meat</Link>
                                    </li>

                                </ul>
                            )}
                        </li>

                        <li>
                            <Link to="/certificates" onClick={() => setOpen(false)}>Certificates</Link>
                        </li>

                        <li>
                            <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                        </li>

                    </ul>

                    {/* MOBILE BUTTON */}
                    <div
                        className="menu-icon"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;