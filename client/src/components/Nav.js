import { Outlet, Link } from "react-router-dom";


function Nav() {
    return (
        <div>
            <h1>Nav Baby</h1>
            <Link to="/">Landing</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/state">State</Link>
            <br/>
            <Link to="/park">Park</Link>
            <br/>
            <Link to="/surprise">Surprise</Link>
            <br/>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/dashboard">Dashboard</Link>
            <br/>
            <Link to="/top-rated">Top Rated</Link>
            <Outlet />
        </div> 
    )
}

export default Nav;