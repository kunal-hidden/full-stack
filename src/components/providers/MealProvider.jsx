import {useState} from "react";
import React from "react";


const  MealsContext = React.createContext();
const todayMeals=["Pasta", "Pizza", "Salad", "Soup"];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todayMeals);
return (
    <MealsContext.MealsProvider value={{meals}}>
        {children}
    </MealsContext.MealsProvider>
)
}
export default MealsProvider;
 
