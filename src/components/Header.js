import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class Header extends React.Component {
  render() {
    // const { isAuthenticated } = this.props.auth0;
    const isAuth = this.props.auth0.isAuthenticated;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Fruits</Navbar.Brand>
        <NavItem>
          {" "}
          <Link to="/" className="nav-link">
            Home{" "}
          </Link>{" "}
        </NavItem>
        {isAuth && (
          <NavItem>
            {" "}
            <Link to="/favFruit" className="nav-link">
              {" "}
              Fav-Fruits
            </Link>{" "}
          </NavItem>
        )}
           {isAuth && (
          <NavItem>
            {" "}
            <Link to="/profile" className="nav-link">
              {" "}
             Profile
            </Link>{" "}
          </NavItem>
        )}


      
        {isAuth ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
