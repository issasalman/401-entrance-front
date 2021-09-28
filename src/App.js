import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Crud from "./components/Crud";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuth ? (
                <Home />
              ) : (
                <>
                  {" "}
                  <Login />{" "}
                  <h1 style={{ textAlign: "center" }}>
                    {" "}
                    Please Log In To Display content{" "}
                  </h1>{" "}
                </>
              )}
            </Route>
            <Route exact path="/favFruit">
              {isAuth && <Crud />}
            </Route>
            <Route exact path="/profile">
              {isAuth && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
