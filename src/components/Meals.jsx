import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const {
    data: availableMeals,
    error: isError,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  function handleAddToCart(id) {
    console.log("adding id: " + id + " to cart");
  }

  if(isLoading) {
    return <p>Fetching meals...</p>
  }

  return (
    <ul id="meals">
      {availableMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            meal={meal}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </ul>
  );
}
