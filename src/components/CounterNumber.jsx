import { useState } from "react";


function CounterNumber(){
    
    const [num,SetCounter]=useState(0)



    return(
        <>
        
        <h1> Counter Number{num} </h1>

        <button  onClick={() => SetCounter(num + 1)}>Add 1  </button>
        <button  onClick ={() => SetCounter(num-1)}> Subtract  1</button>
        </>
        

    );

}
export default CounterNumber;