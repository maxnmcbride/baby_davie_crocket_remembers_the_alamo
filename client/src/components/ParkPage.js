// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

function ParkPage({selectedLocation}) {

    console.log('parkPage- selectedLocation', selectedLocation);

    // const [selectedPark, setSelectedPark] = useState([]);

    // let {parkCode} = useParams();
    // console.log('parkData on ParkPage', parkData);

    return ( 
        <>
        {/* <h1>Park Page</h1> */}
            <div style={{textAlign: "center"}} >
                {/* <h2 style={{border: "solid black 2px"}}>{states}</h2> */}
                <div className="parkContainer">
                    {/* <h3>{fullName}</h3> */}
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