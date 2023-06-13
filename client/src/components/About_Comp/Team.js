import EachMember from "./EachMember";

function Team({prowlerPeople, clickFn}) {

    const peopleArray = prowlerPeople.map(each => {
        return (  <EachMember key={each.id} {...each} clickFn={clickFn}/> )
    });

    return (
        <div id='circle-photo-container-parent'>
            {peopleArray}
        </div>
    )
   
}

export default Team;