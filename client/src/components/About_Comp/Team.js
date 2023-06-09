import EachMember from "./EachMember";

function Team({prowlerPeople}) {

    const peopleArray = prowlerPeople.map(each => {
        return (  <EachMember key={each.id} {...each}/> )
    });

    return (
        <div id='top-container-circle-photo'>
            <div id='circle-photo-container-parent'>
                {peopleArray}
            </div>
        </div>
    )
   
}

export default Team;