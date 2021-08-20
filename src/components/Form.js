import React from "react"
import pizza from "../components/custom_pizza.jpeg"
import SwitchSelector from "react-switch-selector"

function Form() {
  const options = [
    {
      label: <span>no</span>,
      value: {
        foo: true,
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "yes",
      value: "bar",
      selectedBackgroundColor: "blue",
    },
  ]

  const onChange = (newValue) => {
    console.log(newValue)
  }

  const initialSelectedIndex = options.findIndex(({ value }) => value === "bar")
  return (
    <form>
      <div>
        <h2>Build Your Own Pizza</h2>
        <img src={pizza} />
        <h3>Select your favorite toppings</h3>
        <label>
          <h4>Size</h4>Required<br></br>
          <select>
            <option>--select one--</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
        </label>

        <label>
          <h4>Choose your sauce</h4>Required<br></br>
          <input type="radio" value="original" name="Original Red" /> Original
          Red
          <br></br>
          <input type="radio" value="garlic" name="Garlic Ranch" />
          Garlic Ranch
          <br></br>
          <input type="radio" value="bbq" name="BBQ Sauce" />
          BBQ Sauce
          <br></br>
          <input type="radio" value="spinach" name="Spinach Alfredo" />
          Spinach Alfredo
          <br></br>
          <input type="radio" value="secret" name="Secret Lambda Sauce ❤️‍🔥" />
          Secret Lambda Sauce ❤️‍🔥
        </label>

        <label>
          <h4>Add toppings</h4>Choose up to ten<br></br>
          <input type="checkbox" value="pepperoni" name="Pepperoni" />
          Pepperoni
          <br></br>
          <input type="checkbox" value="sausage" name="Sausage" />
          Sausage
          <br></br>
          <input type="checkbox" value="canadia" name="Canadian Bacon" />
          Canadian Bacon
          <br></br>
          <input
            type="checkbox"
            value="spicyitalian"
            name="Spicy Italian Sausage"
          />
          Spicy Italian Sausage
          <br></br>
          <input
            type="checkbox"
            value="grilledchicken"
            name="Grilled Chicken"
          />
          Grilled Chicken
          <br></br>
          <input type="checkbox" value="onions" name="Onions" /> Onions
          <br></br>
          <input type="checkbox" value="greenpepper" name="Green Pepper" />{" "}
          Green Pepper
          <br></br>
          <input
            type="checkbox"
            value="dicedtomatos"
            name="Diced Tomatos"
          />{" "}
          Diced Tomatos
          <br></br>
          <input type="checkbox" value="blackolives" name="Black Olives" />{" "}
          Black Olives
          <br></br>
          <input
            type="checkbox"
            value="roastedgarlic"
            name="Roasted Garlic"
          />{" "}
          Roasted Garlic
          <br></br>
          <input
            type="checkbox"
            value="artichoke"
            name="Artichoke Hearts"
          />{" "}
          Artichoke Hearts
          <br></br>
          <input type="checkbox" value="threecheese" name="Three Cheese" />{" "}
          Three Cheese
          <br></br>
          <input type="checkbox" value="pineapple" name="Pineapple" /> Pineapple
          <br></br>
          <input type="checkbox" value="extracheese" name="Extra Cheese" />{" "}
          Extra Cheese
          <br></br>
        </label>
        <div
          className="your-required-wrapper"
          style={{ width: 100, height: 30 }}
        >
          <label>
            <h4>Choice of Substitute</h4>
            <br></br>
            <SwitchSelector
              onChange={onChange}
              options={options}
              initialSelectedIndex={initialSelectedIndex}
              backgroundColor={"#353b48"}
              fontColor={"#f5f6fa"}
            />
          </label>
        </div>
        <label>
          <h4>Special Instructions</h4>
          <br></br>
          <input
            maxLength="30"
            id="name-input"
            name="fname"
            type="text"
            placeholder="Anything else you'd like to add?"
          />
        </label>
        <input type="submit" id="special-text" />
        <input type="submit" id="order-button" />
      </div>
    </form>
  )
}

export default Form
