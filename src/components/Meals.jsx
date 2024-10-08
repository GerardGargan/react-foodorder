import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import { fetchAvailableMeals } from "../http";

export default function Meals() {

    const [availableMeals, setAvailableMeals] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState();
  
    useEffect(() => {
      async function fetchMeals() {
        setIsFetching(true);
        try {
          const meals = await fetchAvailableMeals();
          setAvailableMeals(meals);
        } catch (error) {
          setIsError({message: error.message || 'Error fetching data'});
        }
        setIsFetching(false);
      }
  
      fetchMeals();
    }, []);

    function handleAddToCart(id) {
        console.log("adding id: "+id+" to cart");
        
    }

    return (
        <ul id="meals">
            {isFetching && <p>Fetching available meals...</p>}
            {isError && <p>{isError.message}</p>}
            {(!isFetching && !isError) && 
            (<>
                {availableMeals.map(meal => {
                    return <MealItem 
                    key={meal.id}
                    meal={meal}
                    handleAddToCart={handleAddToCart}
                    />
                })}
            </>)
            } 
        </ul>
    );
}