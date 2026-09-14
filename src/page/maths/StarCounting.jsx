import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

function StarCounting() {
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [totalStars, setTotalStars] = useState(0);
    const handleSubmit = (e) => {
        const numscores = parseInt(score);
        e.preventDefault();
        const correctAnswer = (numscores * (numscores + 1)) / 2;
        setTotalStars(correctAnswer)
        if (parseInt(userAnswer) === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    const onUserInputChange = (e) => {
        setUserAnswer(e.target.value);
    }


    return (
        <>
            <h1>Star Counting</h1>
            <div className="container">
                <div className="field">
                    <label>Score: {score}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                {

                    Array.from({ length: score }, (_, row) => (
                        <div key={row} className="row justify-content-center">
                            {
                                Array.from({ length: row + 1 }, (_, col) => (
                                    <div key={col} className="col text-center" >
                                        <span className="filled">★</span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                {
                    score > 0 && (
                        <>
                            <InputGroup className="mt-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    Question: How many stars are there in total?
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userAnswer}
                                    onChange={onUserInputChange}
                                    type="number"
                                />
                            </InputGroup>
                            <Button  onClick={handleSubmit} variant="primary" className="mt-3">
                                Submit 
                            </Button>
                        </>
                    )
                }

                {
                    isCorrect === true && (
                        <Alert variant="success" className="mt-3">
                            Correct! The total number of stars is {totalStars}.
                        </Alert>
                    )

                }
                {isCorrect === false && (
                    <Alert variant="danger" className="mt-3">
                        Incorrect! Please try again.
                    </Alert>
                )}
            </div>
        </>
    )
}
export default StarCounting;