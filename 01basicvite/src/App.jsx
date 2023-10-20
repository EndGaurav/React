import Chai from "./chai";

function App() {
  const username = "Hitesh"
  return (
    <>
    {/* listen very carefully: {inside this all is just expression means a evaluted expression inside this we don't write complete javascript. we just write the final outcome of the javascript which gets evaluated.} */}
    {/* complete js we wrote outside return keyword or outside this function. */}
    {/* Q. Why can we not write complete js inside this? */}
    {/* look inside main.jsx file */}
    {/* In shorts, these curly braces contains the evaluated expression. */}
    <h1>Learn React by: {username}</h1>
    <Chai />
    <h2>This is h2 tag.</h2>
    </>
  )
}

export default App
