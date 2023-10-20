
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5;


 const addOne = () => {
    if(counter >=20) return;
    setCounter(counter + 1);
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
      <h2>Counter: {counter}</h2>

      <button onClick={addOne}>Increase: {counter}</button>
      <button onClick={subOne}>Decrase: {counter}</button>

    </>
  )
}

export default App
