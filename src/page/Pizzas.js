

const topPizza=[
    {
 
        id: 1,
        title: "Veg Cheesy Pizza",
        description: "Awesome taste",
        price: 350,
    },
{
   id: 2,
   title: "Margherita Pizza",
   price:550,
},
];



function Pizzas(){
    const pizzaitem=topPizza.map( pizza=>{
        const itemsText=`${pizza.title}  -${pizza.price}`
        return <li> {itemsText}</li>
    })
return(
    <div>
        <li>
            {pizzaitem}
        </li>
    </div>
)
}




export default Pizzas;




    











