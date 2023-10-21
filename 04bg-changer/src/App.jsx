import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>orange</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "DodgerBlue"}} onClick={() => setColor("DodgerBlue")}>DodgerBlue</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "MediumSeaGreen"}} onClick={() => setColor("MediumSeaGreen")}>MediumSeaGreen</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "Gray"}} onClick={() => setColor("Gray")}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "SlateBlue"}} onClick={() => setColor("SlateBlue")}>SlateBlue</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "Violet"}} onClick={() => setColor("Violet")}>Violet</button>
            <button className='outline-none px-4 py-1 rounded-md' style={{backgroundColor: "LightGray"}} onClick={() => setColor("LightGray")}>LightGray</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default App
