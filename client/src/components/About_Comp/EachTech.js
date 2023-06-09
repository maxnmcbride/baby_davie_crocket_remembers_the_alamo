function EachTech({src, alt}) {
    return ( 
        <div id='tech-stack-section'>
            <img 
                className='tech-stack-icon' 
                src={src} 
                alt={alt}
            />
        </div> 
    );
}

export default EachTech;