export default function MealItem({id, name, description, price, image, handleAddToCart}) {
    const imageUrl = "http://localhost:3000/"+image;
    return (
        <li className="meal-item" key={id}>
            <article>
                <img src={imageUrl} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">
                        {description}
                    </p>
                </div>
                <div className="meal-item-actions">
                    <button className="button" onClick={() => handleAddToCart(id)}>Add to Cart</button>
                </div>
            </article>
        </li>
    );
}