import Card from "./components/Card"

function App() {
  const myObject = {
    name: "Gaurav", 
    height: 1.23
  }

  const myArray = [1,2,3,4]
  return (
    <>
      <Card channel="learn-via-code" />
      <Card channel="Ragini" btnText="Click here" />
    </>
  )
}

export default App
