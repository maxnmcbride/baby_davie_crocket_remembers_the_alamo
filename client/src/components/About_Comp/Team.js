

function Team({src, alt, name}) {
    return ( 
        <div>
            <img src={src} alt={alt}/>
            <h4>{name}</h4>
        </div>
     );
}

export default Team;