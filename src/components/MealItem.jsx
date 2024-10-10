import { currencyFormatter } from "../formatting";
import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({meal}) {
    
    const cartCtx = useContext(CartContext);
    function handleAddMealToCart() {
        cartCtx.addItem(meal);
    }

    const imageUrl = "http://localhost:3000/"+meal.image;
    return (
        <li className="meal-item">
            <article>
                <img src={imageUrl} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">
                        {meal.description}
                    </p>
                </div>
                <p className="meal-item-actions">
                    <Button className="button" onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}