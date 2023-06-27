import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Footer from "./components/Footer";

function App() {

  const [data, setData] = useState([])

  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // Query adjustment for limits is done on the back end
    fetch('http://localhost:3000/parks')
      .then(res => res.json())
      .then(data => setData(data.data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage parkData={data} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="state/:states" element={<StatePage parkData={data} selectedLocation={selectedLocation} />}/>
          <Route path="state" element={<StatePage parkData={data} selectedLocation={selectedLocation} />} />
          <Route path="park/:parkCode" element={<ParkPage selectedLocation={selectedLocation}  />} />
          {/* <Route path="park" element={<ParkPage selectedLocation={selectedLocation} />}  /> */}
          <Route path="top-rated" element={<TopRated />} />
          <Route path="surprise" element={<SurpriseMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
