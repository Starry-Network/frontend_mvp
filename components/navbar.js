import { useState } from "react"
import Link from 'next/link';

const NavbarEnd = () => (
    <div className="navbar-end">
        <Link href='/'>
            <a className="navbar-item">
                Exchange
            </a>
        </Link>


        <a className="navbar-item" href="/create">
            Create
                    </a>
        <a className="navbar-item" href="/splitNFT">
            Split NFT
        </a>
    </div>
)

export default function Navbar() {
    const [isMobileMenuActivate, setMobileMenuActivate] = useState(false);

    return (
        <nav className="navbar navbar_warpper is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Starry
                </a>
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