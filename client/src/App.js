import { useEffect, useState } from "react";

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

  console.log(parkData.map((parkObj) => parkObj.fullName))

  return (
    <div className="App">
      <h1>Hi, I'm Davie Crockett and welcome to the Alamo!</h1>
    </div>
  );

}

export default App;
