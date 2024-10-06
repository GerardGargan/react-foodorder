export default function MealItem() {
    return (
        <div className="meal-item">
            <article>
                <img />
                <h3>Title</h3>
                <span className="meal-item-price">£8.99</span>
                <div className="meal-item-description">
                    Description
                </div>
                <div className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </div>
    );
}