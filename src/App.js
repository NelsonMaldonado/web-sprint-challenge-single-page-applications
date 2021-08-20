import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"
import Confirmation from "./components/Confirmation"
import About from "./components/About"
import "./App.css"
import errorimg from "./components/error404.png"
import { findByLabelText } from "@testing-library/dom"
const App = () => {
  //Style for App
  const myStyle = {
    backgroundColor: "#018c96",
  }

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid black",
    fontSize: "2em",
    fontFamily: "futura",
    style: "none",
    backgroundColor: "#eb5401",
    textDecoration: "none",
  }

  return (
    <div className="appDiv" style={myStyle}>
      <h1>Lambda Eats</h1>
      <nav style={navStyle}>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} id="order-pizza" to="/pizza">
          Form
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pizza" exact component={Form} />
        <Route path="/about" exact component={About} />
        <Route path="/comfirmation" exact component={Confirmation} />
        //Custom Error 404 Page
        <Route
          path="/"
          render={() => (
            <div>
              <img src={errorimg} />
              Where are you trying to go my friend? This page doesn't exist
            </div>
          )}
        />
      </Switch>
      <p>Lambda Pizza now hiring!</p>
    </div>
  )
}
export default App
