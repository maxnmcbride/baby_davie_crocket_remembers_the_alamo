

function MemberDetails({name, photo, alt, bio, linkedin, github, medium, other_url}) {


    return ( 
        <div id='member-details-div'>
            <img id='full-bio-photo' src={photo} alt={alt}/>
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <h3>You can find more about them here:</h3>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className='website-link-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='linkedin logo'/>
                        <h4>LinkedIn</h4>
                    </div>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className='website-link-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github logo' />
                        <h4>GitHub</h4>
                    </div>
                </a>
                <a href={medium} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className='website-link-icons' src='https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png' alt='medium blog logo'/>
                        <h4>Medium</h4>
                    </div>   
                </a> 
            </div>
        </div>
     );
}

export default MemberDetails;