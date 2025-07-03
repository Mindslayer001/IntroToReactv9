import Pizza from "./Pizza";
import { useState,useEffect } from "react";


export default function Order() {
const [pizzaType, setPizzaType] = useState("pepperoni");
const [pizzaSize, setPizzaSize] = useState("M");
console.log(pizzaType, ' ', pizzaSize)

return(
    <div className="order">
        <h2>Create order Page</h2>
        <form>
            <div>
                <div>
                    <label htmlFor="pizza-type">pizza Type</label>
                    <select 
                    onChange={(e) => setPizzaType(e.target.value)}
                    name="pizza-type" value={pizzaType}>
                        <option value="pepperoni">The Pepperoni Pizza</option>
                        <option value="hawaiian">The Hawaiian Pizza</option>
                        <option value="big_meat">The Big Meat Pizza</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pizza-size">pizza Type</label>
                    <div>
                        <span>
                            <input
                                onChange={(e) => setPizzaSize(e.target.value)}
                                checked={ pizzaSize === 'S'}
                                type = "radio"
                                name="pizza-size"
                                value="S"
                                id="pizza-s"
                            />
                            <label htmlFor="pizza-s">Small</label>
                        </span>
                        <span>
                            <input
                                onChange={(e) => setPizzaSize(e.target.value)}
                                checked={ pizzaSize === 'M'}
                                type = "radio"
                                name="pizza-size"
                                value="M"
                                id="pizza-m"
                            />
                            <label htmlFor="pizza-m">Medium</label>
                        </span>
                        <span>
                            <input
                                onChange={(e) => setPizzaSize(e.target.value)}
                                checked={ pizzaSize === 'L'}
                                type = "radio"
                                name="pizza-size"
                                value="L"
                                id="pizza-L"
                            />
                            <label htmlFor="pizza-L">Large</label>
                        </span>
                    </div>
                </div>
                <button type="submit"> Add to Cart</button>
                <div className="Order-pizza">
                    <Pizza name='pepperoni' description='pepperoni' image='/public/pizzas/pepperoni.webp'/>
                    <p>$13.37</p>
                </div>
            </div>
        </form>
    </div>
)
}