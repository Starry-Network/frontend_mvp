import {
    Link
  } from "react-router-dom";

import { useState } from "react"

const NavbarEnd = () => (
    <div className="navbar-end">
        <Link className="navbar-item" to="/">
            Exchange
        </Link>
        <Link className="navbar-item" to="/create">
            Create
        </Link>
        <Link className="navbar-item" to="/splitNFT">
            Split NFT
        </Link>
        <Link className="navbar-item" to="/daos">
            DAOs
        </Link>
    </div>
)

export default function Navbar() {
    const [isMobileMenuActivate, setMobileMenuActivate] = useState(false);

    return (
        <nav className="navbar navbar_warpper is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    Starry
                </Link>
                <button
                    onClick={() => {
                        setMobileMenuActivate(!isMobileMenuActivate);
                    }}
                    className={`navbar-burger burger ${isMobileMenuActivate ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className={`navbar-menu ${isMobileMenuActivate ? "is-active" : ""}`}>
                <NavbarEnd />
            </div>
        </nav>
    )
}