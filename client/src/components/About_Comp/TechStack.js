import EachTech from "./EachTech";


function TechStack({icons}) {

    const techArray = icons.map(each => {
        return ( <EachTech key={each.alt} {...each} />)
    }) 

    return ( 
       <div id='tech-stack-icon-div'>
            {techArray}
       </div> 
     );
}

export default TechStack;