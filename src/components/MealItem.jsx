import { currencyFormatter } from "../formatting";

export default function MealItem({id, name, description, price, image, handleAddToCart}) {
    
    const imageUrl = "http://localhost:3000/"+image;
    return (
        <li className="meal-item">
            <article>
                <img src={imageUrl} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                    <p className="meal-item-description">
                        {description}
                    </p>
                </div>
                <p className="meal-item-actions">
                    <button className="button" onClick={() => handleAddToCart(id)}>Add to Cart</button>
                </p>
            </article>
        </li>
    );
}