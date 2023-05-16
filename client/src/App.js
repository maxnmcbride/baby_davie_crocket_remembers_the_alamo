import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Map from 'react-map-gl';

import SignUp from "./components/SignUp"
import Nav from "./components/Nav";
import NoPage from "./components/NoPage";
import LandingPage from "./components/LandingPage";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="signup" element={<SignUp />} />
          <Route index element={<LandingPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    
    //   <h1>Hi, I'm Davie Crockett and welcome to the Alamo!</h1>
    //   {/* <Map
    //     mapLib={import('mapbox-gl')}
    //     initialViewState={{
    //       longitude: -100,
    //       latitude: 40,
    //       zoom: 3.5
    //     }}
    //     style={{ width: 600, height: 400 }}
    //     mapStyle="mapbox://styles/mapbox/streets-v9"
    //   />; */}
    //   <SignUp />
    // </div>
  );

}

export default App;
