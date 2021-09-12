import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

import pokeball from "../Assets/pokeball.png"

const NavbarLayout = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const closeNavbar = () => setIsOpen(false);

    return (
        <div>
            <Navbar color="secondary" light expand="md" className="Navbar-container">
                <NavbarBrand href="/" className="d-flex flex-row">
                    <img src={pokeball} alt="Pokemon" className="App-Brand" />
                    <div className="App-Brand-Text align-middle h-100">Pokemon</div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="d-sm-inline-flex flex-sm-row-reverse">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/" onClick={closeNavbar} className="Navbar-text">Pokemon List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/mypokemon" onClick={closeNavbar} className="Navbar-text">My Pokemon</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarLayout;