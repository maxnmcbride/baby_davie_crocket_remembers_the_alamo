import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <div id='footer-container'>
            <Link>
                <img src='' alt=''/>
            </Link>
            <div id='footer-links'>
                <p>something</p>
                <a href=''>GitHub</a>
                <br/>
                <Link to="/about">About</Link>
            </div>
            <h4>We love our Parks! <br/>© Park Prowler, 2023</h4>
        </div>
     );
}

export default Footer;