/* import React from "react";

 function GoalForm(props){
    const [formData,setFormData]=React.useState({goal:"" , by :" "});
    function changehandler(e){
        setFormData({...formData, [e.target.name]: e.target.value})}
    }
    function submitHandler(e){
        e.preventDefault();
            props.onAdd(formData);
            setFormData({goal:"", by:""});
    return(
        <>
        <h1> My little lemon goals</h1>
       <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changehandler}/>
        <input type="text" name="by" placeholder="By" value={formData.by} onChange={changehandler}/>
        <button>Submit goal</button>
</form>

</>
    )
    }
function GoalList(props){
    return(
        <uL>
            {props.allGoals.map((g)=>{
                <li key={g.id}>
                    <span>{g.goal}</span> by <span>{g.by}</span>
                </li>
            })}
        </uL>
    );
}
export default function Goal(){
    const [goals,setGoals]=React.useState([]);
    function addGoal(goal){setGoals([goal, ...goals])}
    return(
        <div className="container">
            <GoalForm onAdd={addGoal}/>
            <GoalList allGoals={goals}/>
            </div>
    );
} */