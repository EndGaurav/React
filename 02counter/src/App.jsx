
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5;


 const addOne = () => {
    if(counter >= 20) return;
    // setMethod always carry a callback function and the parameter of that callback function always carry the previous value of the variable. 
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter(counter + 1)

 }

 const subOne = () => {
    if(counter <= 0) {
      return;
    }
    setCounter(counter - 1);
 }
  return (
    <>
      {counter}
      <h1>chai aur code</h1>
      <h2 onClick={addOne}>Counter: {counter}</h2>

      <button onClick={addOne}>Increase: {counter}</button>
      <button onClick={subOne}>Decrase: {counter}</button>

    </>
  )
}

export default App
