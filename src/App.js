import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"
import Confirmation from "./components/Confirmation"
import About from "./components/About"
import "./App.css"

const App = () => {
  //Style for App
  const myStyle = {
    backgroundColor: "#018c96",
    outerHeight: "400px",
  }
  return (
    <div className="appDiv" style={myStyle}>
      <h1>Lambda Eats</h1>

      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/about">About</Link>

      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/about" component={About} />

      <p>Lambda Pizza now hiring!</p>
    </div>
  )
}
export default App
