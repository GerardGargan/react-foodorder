export default function MealItem({id, name, description, price, image, handleAddToCart}) {
    const imageUrl = "http://localhost:3000/"+image;
    return (
        <div className="meal-item">
            <article>
                <img src={imageUrl} />
                <h3>{name}</h3>
                <span className="meal-item-price">{price}</span>
                <div className="meal-item-description">
                    {description}
                </div>
                <div className="meal-item-actions">
                    <button className="button" onClick={() => handleAddToCart(id)}>Add to Cart</button>
                </div>
            </article>
        </div>
    );
}