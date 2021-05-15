import Grid from "./components/Grid/Grid.jsx";
import Input from "./components/Input/Input"
import { useState } from "react"

function App() {
  const [ sequence, setSequence ] = useState("");
  const handleChange = (e) => {
    setSequence(e.target.value)
  }
  return (
    <>
      <Grid sequence={sequence} handleChange={handleChange}/>
    </>
  );
}

export default App;
