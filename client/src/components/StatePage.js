import { useEffect, useState } from "react";

function StatePage() {
    const [data, setData] = useState([])

    //TEST - REPLACE WITH PARK FETCH
    useEffect(() => {
        fetch('http://shibe.online/api/shibes?count=5')
          .then(res => res.json())
          .then(data => setData(data))
      }, [])


    
    function ParkThumbnails ({data}) {
        return(
            <img src={data} alt="test" style={{width: 100}} />
        )
    }

    return ( 
        <div id="state-container">
            <div id="state-header">
                <h1>State Name</h1>
            </div>
            <div id="state-content">
                <h3>Lorem epsum blah blah  here’s some intro about this state. Saying other stuff about this state it’s super cool. Okeydokey. </h3>
                <div id="park-thumbnails">
                   {data ? data.map((d) => <ParkThumbnails data={d}/>) : null}
                </div>
                <div className="parks-display"></div>
                <div className="parks-display"></div>
            </div>

        </div>
        
     );
}

export default StatePage;