import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

function Counting() {
    const [operation, setOperation] = useState("sum")
    const [num1, setNum1] = useState(Math.floor(Math.random() * 20) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 20) + 1);
    return (
        <Container fluid className="math-practice-page px-0">
            <div className="math-practice-header">
                <div className="sun-wrap">
                    <div className="sun">
                        <span className="sun-ray ray-1" />
                        <span className="sun-ray ray-2" />
                        <span className="sun-ray ray-3" />
                        <span className="sun-ray ray-4" />
                        <span className="sun-ray ray-5" />
                        <span className="sun-ray ray-6" />
                        <span className="sun-ray ray-7" />
                        <span className="sun-ray ray-8" />
                        <div className="sun-face">
                            <span className="eye left" />
                            <span className="eye right" />
                            <span className="smile" />
                        </div>
                    </div>
                </div>

                <div className="math-title-wrap">
                    <h1 className="math-title">Math Practice</h1>
                    <p className="math-subtitle">Choose an operation, solve the problem and check your answer!</p>
                </div>

                <div className="motivation">
                    <span>You</span>
                    <span>Can</span>
                    <span>Do It!</span>
                    <span className="heart">♥</span>
                </div>
            </div>

            <Container className="math-card">
                <h2 className="section-title">1. Choose an operation</h2>

                <Row className="g-3 operation-row">
                    <Col xs={12} md={6} lg={3}>
                        <div className="operation-card operation-sum">
                            <Form.Check className="radio"
                                type="radio"
                                name="operation"
                                value="sum"
                                checked={operation === "sum"}
                                onChange={(e) => setOperation(e.target.value)}
                            />

                            <div className="operation-text">
                                <span className="operation-label">Sum</span>
                                <span className="operation-symbol">(+)</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="operation-card operation-subtract">
                            <Form.Check
                                type="radio"
                                name="operation"
                                value="subtract"
                                checked={operation === "subtract"}
                                onChange={(e) => setOperation(e.target.value)}
                            />

                            <div className="operation-text">
                                <span className="operation-label">Subtract</span>
                                <span className="operation-symbol">(-)</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="operation-card operation-divide">
                            <Form.Check
                                type="radio"
                                name="operation"
                                value="divide"
                                checked={operation === "divide"}
                                onChange={(e) => setOperation(e.target.value)}
                            />

                            <div className="operation-text">
                                <span className="operation-label">Divide</span>
                                <span className="operation-symbol">(÷)</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="operation-card operation-multiply">
                            <Form.Check
                                type="radio"
                                name="operation"
                                value="multiply"
                                checked={operation === "multiply"}
                                onChange={(e) => setOperation(e.target.value)}
                            />

                            <div className="operation-text">
                                <span className="operation-label">Multiple</span>
                                <span className="operation-symbol">(×)</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <h2 className="section-title">2. Solve this problem</h2>

                <Row className="align-items-center justify-content-center problem-row g-3">
                    <Col xs="auto">
                        <div className="number-box">{num1}</div>
                    </Col>
                    <Col xs="auto">
                        <div className="number-box blue-box">
                            {operation === "sum" && "+"}
                            {operation === "subtract" && "-"}
                            {operation === "divide" && "÷"}
                            {operation === "multiply" && "×"}
                        </div>
                    </Col>
                    <Col xs="auto">
                        <div className="number-box">{num2}</div>
                    </Col>
                    <Col xs="auto">
                        <div className="number-box blue-box">=</div>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            className="answer-box"
                            type="number"
                        />
                    </Col>
                </Row>

                <div className="submit-button-wrap">
                    <Button className="submit-button">Submit Answer</Button>
                </div>
            </Container>

            <div className="bottom-banner">
                <div className="bottom-note small-steps">
                    <span>Small</span>
                    <span>Steps</span>
                    <span>Big Progress!</span>
                </div>

                <div className="bottom-note keep-learning">
                    <span>Keep</span>
                    <span>Learning!</span>
                </div>
            </div>
        </Container>
    );
}

export default Counting;