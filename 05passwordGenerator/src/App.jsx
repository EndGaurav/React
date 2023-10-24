import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  // The useRef Hook is a function that returns a mutable ref object whose . current property is initialized with the passed argument ( initialValue ).
  const passwordRef = useRef(null);
  
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // jin jin variable se hum baat karte hai, un variables ko hum as dependency pass kar dete hai useCallback hook m.
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (specialCharAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);
  },
    [numberAllowed, specialCharAllowed, length, setPassword],
  )

  const copyPasswordToClipboard = useCallback(() => {
    // useRef is used for inhancing user experience.
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(1,4)
    window.navigator.clipboard.writeText(password)
  }, [password])


  // The useEffect hook in React is used to perform side effects in functional components.
  // It allows you to handle things like data fetching, subscriptions, or manually changing the DOM.
  // you can think of useEffect as a way to tell React, "Hey, I want to do something after the component has rendered or when some specific data/state changes."
  useEffect(() => { passwordGenerator() }, [numberAllowed, specialCharAllowed, length, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              id='range'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={specialCharAllowed}
              id="charInput"
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
