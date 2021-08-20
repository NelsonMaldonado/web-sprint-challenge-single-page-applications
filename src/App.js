import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Form from "./components/Form"
import Home from "./components/Home"
import Confirmation from "./components/Confirmation"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/about">About</Link>

        <Route path="/about" component={About} />
      </Router>

      <p>You can remove this code and create your own header</p>
    </>
  )
}
export default App
