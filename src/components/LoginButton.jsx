import { LogIn, LogOut } from 'lucide-react';
import Button from 'react-bootstrap/Button';

function LoginButton(props){
    return(
      <Button variant="primary" onClick={props.login}>
      
       {props.islogin ?<LogOut /> :<LogIn /> } 
       {props.islogin ?"Log out" : "Log in"} 
        </ Button>
    )
}
export default LoginButton;