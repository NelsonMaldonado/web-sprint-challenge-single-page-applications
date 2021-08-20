import React from "react"
import pizzaDelivery from "../components/pizza_delivery.gif"

function Confirmation() {
  return (
    <div>
      <img src={pizzaDelivery} alt="pizza_gif" />
      <h1>Your Pizza is on the way</h1>
    </div>
  )
}

export default Confirmation
