function EachMember({name, img_circle, alt }) {
    return ( 
        <div>
            <img className='circle-photo' src={img_circle} alt={alt}/>
            <h4 className='circle-photo-name' >{name}</h4>
        </div>
     );
}

export default EachMember;