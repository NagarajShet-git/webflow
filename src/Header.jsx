import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="nav-container w-container">
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="nav-link-wrapper">
                        <Link to="/" aria-current="page" className="nav-link w-nav-link w--current">Home</Link>
                        <Link to="/" aria-current="page" className="nav-link move-down hide-on-tab w-nav-link w--current">Home</Link>
                    </div>
                    <div className="nav-link-wrapper">
                        <Link to="/about" className="nav-link w-nav-link">About</Link>
                        <Link to="/about" className="nav-link move-down hide-on-tab w-nav-link">About</Link>
                    </div>
                    <div className="nav-link-wrapper">
                        <Link to="/works" className="nav-link w-nav-link">Works</Link>
                        <Link to="/works" className="nav-link move-down hide-on-tab w-nav-link">Works</Link>
                    </div>
                    <div className="nav-link-wrapper">
                        <Link to="/contact" className="nav-link w-nav-link">Contact</Link>
                        <Link to="/contact" className="nav-link move-down hide-on-tab w-nav-link">Contact</Link>
                    </div>
                </nav>
                <div className="menu-button w-nav-button">
                    <div className="burger-icon w-icon-nav-menu"></div>
                </div>
            </div>
        </>
    )
}
