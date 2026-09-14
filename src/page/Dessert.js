
const topdessert = [
  {
    id: 1,
    title: 'Lemon Ice cream',
    description: 'Mind Blowing taste.',
    price :"500"
  },
{
    id: 2,
    title: 'Chocolate cake',
    description: 'Awesome flavour.',
    price :"500"
  },
]


function Dessert(){
  const listitem=topdessert.map(dessert =>{
   const itemText=`${dessert.title}  ${dessert.price}`
    return <li> {itemText}</li>
  })
 return(
  <div>
    <ul>
      {listitem}
    </ul>
  </div>
 )
}
export default Dessert;
      
       
    
  
