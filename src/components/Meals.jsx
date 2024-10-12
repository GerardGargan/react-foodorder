import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: availableMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  function handleAddToCart(id) {
    console.log("adding id: " + id + " to cart");
  }

  if(isLoading) {
    return <p className="center">Fetching meals...</p>
  }

  if(error) {
    return <Error title="Failed to fetch meals" message={error} />
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
