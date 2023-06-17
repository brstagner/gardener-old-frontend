import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import './css/nav.css';

function NavBar ({ currentUser, logout, clearErrors }) {
    return (
        <Navbar className="navbar">
            <NavbarBrand className="link-dark navbar-brand mb-0 h1 fs-2" href="/">
                Gardener
            </NavbarBrand>
            {localStorage.currentUser ? (
                <Nav>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={clearErrors}
                            to="/profile">
                            Profile ({localStorage.currentUser})
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={clearErrors}
                            to="/gardens">
                            Gardens
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={clearErrors}
                            to="/plants">
                            Plants
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={logout}>
                            Log out
                        </NavLink>
                    </NavItem>
                </Nav>
            ) : (
                <Nav>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={clearErrors}
                            to="/login">
                            Log in
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="link-dark m-5 h5 text-decoration-none"
                            onClick={clearErrors}
                            to="/register">
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>
            )}
        </Navbar>
    );
}

export default NavBar;