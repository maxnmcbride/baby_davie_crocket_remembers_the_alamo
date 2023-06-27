import { Link } from "react-router-dom";
import park_prowler_pup_R from '../media/park_prowler_pup_R.jpg';

function Footer() {
    return ( 
        <div id='footer-container'>
            <Link>
                <img id='footer-icon' src={park_prowler_pup_R} alt='park prowler pup wearing hat'/>
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