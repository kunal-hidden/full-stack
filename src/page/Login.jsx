import JointheWaitlist from "../components/JointheWaitlist";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import ReactPlayer from "react-player";

function Login() {
 const [joinner, setJoinner] = useState({ name: "", phone: "" });
 
    return (
        <>
            <div className="d-flex row">
                <h1 className="row">We are launching Soon!</h1>

                <Alert className="row" variant="primary">
                    Ring in the New Year — fresh beginnings and smoother cafe operations with CueCafe!
                </Alert>

                {joinner.name.length > 0 && (
                    <Alert className="row" variant="success">
                        Thanks for Joining {joinner.name}
                    </Alert>
                )}

                <hr />

                <p className="row">
                    We are crafting a better way to manage operations when we go live.
                </p>

                <h3>00 Days : 00 Hours : 00 Minutes</h3>

                <div className="">
                    <Card style={{ width: "25rem" }}>
                        <Card.Body>
                            <Card.Title>Join the Waitlist</Card.Title>
                            <JointheWaitlist onJoin={setJoinner} />
                            <hr />

                            <div className="row">
                                <ReactPlayer
                                    src='"https://www.youtube.com/watch?v=w9d6YuR0KGU";'
                                   controls={false}
                                   width="560px"
                                   height="315px"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Login;