import LoginButton from "../components/LoginButton";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { Camera } from 'lucide-react';

function Conditional() {
    const [loggedIn, setLoggedIn] = useState(false);
    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);
    const islogin = loggedIn ? "you are locked in" : "you are not locked in";
    return (
        <>
            <Alert variant={loggedIn ? "success" : "danger"}>
                <Camera />{islogin} 
            </Alert>
            {loggedIn ? "Thanks For Joining Kunal": null}
            {loggedIn ? (
                <div>
                    <LoginButton login={logout} islogin={loggedIn} />
                </div >
            ) :
                <LoginButton login={login} islogin={loggedIn} />

            } </>)
}

export default Conditional;