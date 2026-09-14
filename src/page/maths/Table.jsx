import { useState } from "react";

function Table() {
    const [score, setScore] = useState(10);

    return (
        <>
        <h1> Tables</h1>
            <div className="container">
                <div className="field">
                    <label>Score: {score}</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                {
                
                    Array.from({ length: 10 }, (_, index) => (
                        <div key={index} className="row">
                            {
                                Array.from({ length: 10 }, (_, innerIndex) => (
                                    <div key={innerIndex} className="col">
                                        <div>
                                            {score*10 >= (index + 1 + innerIndex * 10) ? (
                                                <span className="filled">  {innerIndex+1 } x  {index+1 }=
                                                {innerIndex+1 * (index+1) }</span>
                                                
                                            ) : 
                                                <span className="empty">☆</span>
                                        }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Table;