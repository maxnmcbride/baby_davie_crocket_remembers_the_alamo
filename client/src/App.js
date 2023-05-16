import { useEffect, useState } from "react";
import SignUp from "./components/SignUp"

function App() {

  const [data, setData] = useState([])

useEffect(() => {
  // FIRGURE OUT HOW TO OVERRIDE LIMIT ON FETCH TO HAVE ACCESS TO ALL PARKS
  fetch('http://localhost:3000/parks')
  .then(res => res.json())
  .then(data => setData(data.data))
},[])

console.log(data)

  return (
    <div className="App">
      <h1>Hi, I'm Davie Crockett and welcome to the Alamo!</h1>
      <SignUp />
    </div>
  );
}

export default App;
