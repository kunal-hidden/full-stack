import {useMealsListContext} from "./providers/MealProvider";
const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h3>Number of Meals: {meals.length}</h3>
        </div>
    );
};
export default Counter;










