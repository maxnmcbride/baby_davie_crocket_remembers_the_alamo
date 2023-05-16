import SignUp from "./SignUp";
import { Outlet, Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <h1>Nav Baby</h1>
            <Link to="/">Landing</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
            
            <Outlet />
        </div> 
    )
}

export default Nav;