import { useEffect, useState } from "react";
// import Map from 'react-map-gl';

function App() {

  const [parkData, setParkData] = useState([])

  useEffect(() => {
    // FIGURE OUT HOW TO OVERRIDE LIMIT ON FETCH TO HAVE ACCESS TO ALL PARKS
    fetch('http://localhost:3000/parks')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => setParkData(data.data))
  }, [])

  console.log(parkData.map((parkObj) => parkObj))

  return (
    <div className="App">
      <h1>Hi, I'm Davie Crockett and welcome to the Alamo!</h1>
      {/* <Map
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />; */}
    </div>
  );

}

export default App;
