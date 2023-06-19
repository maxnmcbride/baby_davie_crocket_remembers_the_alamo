import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ParkPage({parkData, selectedLocation}) {

    // console.log(selectedLocation);

    const [selectedPark, setSelectedPark] = useState([]);

    let {fullName} = useParams();
    console.log('fullName, useParams, ParkPage', fullName);

    // NEED TO SET UP PARK ROUTES BY FULLNAME ON BACKEND:
    // useEffect(() => {
    //     fetch(`http://localhost:3000/parks/${fullName}`)
    //         .then((r) => r.json())
    //         .then((park) => (
    //             setSelectedPark(park)
    //         ))
    //         console.log('selectedPark on parkpage through useeffect', selectedPark)
    // })

    return ( 
        <>
        {/* <h1>Park Page</h1> */}
            <div style={{textAlign: "center"}} >
                {/* <h2 style={{border: "solid black 2px"}}>{states}</h2> */}
                <div className="parkContainer">
                    <h3>{fullName}</h3>
                    <div className="parkImgContainer">
                        {/* <img src={images[1]}  alt={fullName}/> */}
                    </div>
                    {/* <h4>{description}</h4> */}
                </div>
            </div>
        </>
     );
}

export default ParkPage;