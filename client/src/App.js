import { useEffect, useState } from "react";
// import Map from 'react-map-gl';
import SignUp from "./components/SignUp"

function App() {

  const [data, setData] = useState([])

useEffect(() => {
  // FIGURE OUT HOW TO OVERRIDE LIMIT ON FETCH TO HAVE ACCESS TO ALL PARKS
  fetch('http://localhost:3000/parks')
  .then(res => res.json())
  .then(data => setData(data.data))
},[])


console.log(data)

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
      <SignUp />
    </div>
  );

}

export default App;
