import { useState } from "react";

function Form() {
    const [name, setName] = useState("")

    const Handlesubmit =(e)=>{
        e.preventDefault();
        setName("")
        console.log("Form Submitted");
    }
    return (
        <div className="container">
            <form onSubmit={Handlesubmit}>
                <fieldset>
                    <div className="form">
                        <label htmlFor="name">Name:</label>
                        <input
                        id="name"
                            type="text"
                            placeholder="Name"
                            name="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <hr/>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default Form;