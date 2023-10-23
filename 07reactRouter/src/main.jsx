import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home, User, getGithubUserData } from './components/index.js'

// First way:
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About /> 
//       },
//       {
//         path: "contact",
//         element: <Contact /> 
//       },

//     ]
//   }
// ])

// Second way:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* after colon: whatever you write just notedown that. */}
      <Route path='users/:userid' element={<User />} />
      <Route
          loader={getGithubUserData}
          path='github'
          element={<Github />}
       />
      
    </Route>
  ) 
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
