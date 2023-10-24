import { useContext } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import UserContext from "./context/UserContext"



function App() {
  
  return (
     
      <UserContextProvider>
        <div>Mini context</div>
        <Profile />
        <Login />


      </UserContextProvider>
      
  
  )
}

export default App
