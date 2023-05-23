import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import SignUp from "./components/SignUp"
import Nav from "./components/Nav";
import NoPage from "./components/NoPage";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import SurpriseMe from "./components/SurpriseMe";
import Login from "./components/Login";
import TopRated from "./components/TopRated";
import StatePage from "./components/StatePage";
import ParkPage from "./components/ParkPage";
import Dashboard from "./components/Dashboard";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    // FIGURE OUT HOW TO OVERRIDE LIMIT ON FETCH TO HAVE ACCESS TO ALL PARKS
    fetch('http://localhost:3000/parks')
      .then(res => res.json())
      .then(data => setData(data.data))
  }, [])

  console.log(data)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="state" element={<StatePage />} />
            <Route path="park" element={<ParkPage />} />
            <Route path="top-rated" element={<TopRated />} />
            <Route path="surprise" element={<SurpriseMe />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Map
        initialViewState={{
          latitude: 44.967243,
          longitude: -103.771556,
          zoom: 2
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker longitude={-103.771556} latitude={44.967243} color="navy" />
      </Map>
    </>
  );

}

export default App;
