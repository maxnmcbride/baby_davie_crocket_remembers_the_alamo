import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function StatePage({selectedLocation}) {

    const [selectedState, setSelectedState] = useState([]);

    let {states} = useParams();
    console.log('fullName, useParams, ParkPage', states);

    // NEED TO SET UP STATE ROUTES BY STATE NAMES ON BACKEND:
    // useEffect(() => {
    //     fetch(`http://localhost:3000/state/${states}`)
    //         .then((r) => r.json())
    //         .then((state) => (
    //             setSelectedState(state)
    //         ))
    //         console.log('selectedState on StatePage through useEffect', selectedState)
    // })

    return ( 
        <>
            <h1>All National Parks in {states}:</h1>
        </>
     );
}

export default StatePage;