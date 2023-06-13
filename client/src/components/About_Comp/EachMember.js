import { useState } from "react";
import MemberDetails from "./MemberDetails";


function EachMember({name, img_circle, img_full, alt_title, bio, linkedin, github, medium, other_url, clickFn}) {

    const [showAbout, setShowAbout] = useState(false);

  
    return ( 
        <>
            <div onClick={clickFn}>
                <img className='circle-photo' src={img_circle} alt={alt_title}/>
                <h4 className='circle-photo-name'>{name}</h4>
            </div>
            {/* THIS DOESN'T WORK FOR PASSING PROPS WHEN THE COMPENENT DISPLAYS IN THE ABOUT PARENT COMPONENT */}
            {showAbout ? 
                <MemberDetails
                    name={name} 
                    photo={img_full} 
                    alt={alt_title} 
                    bio={bio} 
                    linkedin={linkedin}
                    github={github}
                    medium={medium}
                    other_url={other_url}
                /> : null}
        </>
     );
}

export default EachMember;