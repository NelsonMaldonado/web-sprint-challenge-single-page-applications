import React from "react"
import Pizza from "../components/Pizza.jpg"

function Home() {
  const homeStyle = {
    color: "#efb52b",
  }
  const imgStyle = {
    width: "100%",
  }

  return (
    <header style={homeStyle}>
      <img src={Pizza} style={imgStyle} />
      <h2>Welcome Home</h2>
    </header>
  )
}

export default Home
