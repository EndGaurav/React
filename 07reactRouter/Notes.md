# React router dom
it is 3rd party library. used by react
it is not a part of core react.
import {Link, NavLink} from "react-router-dom"
At the place of 'a' we use Link and NavLink for providing current context for navigation in UI.
'isActive' comes as a default parameter in callback function of className in NavLink tag inside react-router-dom package. 
'isActive' value is totally dependent on whether that page is in url or not.

```React
<ul>
    <li>
        <NavLink to="/"
        
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0`
            }
        >
            Home
        </NavLink>
    </li>
    <li>
        <NavLink to="/about"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0`
            }
        >
            About
        </NavLink>
    </li>
    
                            
</ul>
```

# Outlet
```React
import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
        <Header />
         {/* it uses layout as base stucture. */}
        {/* where you use the Outlet then their you can render component dynamically. */}
        {/* Layout is used for rendering component dynamically. */}
        {/* if you want top two component behave like static, so you can use Layout after rendering those two component. */}
        {/* its up to you how you wanna render components. */}
        <Layout />
        <Footer />
    </>
  )
}

export default Layout
```

# data Loader in React-Route-dom
- API call.
- it takes a callback function or method.
- ye element per over hone ke time he trigger ho jata hai. 
- it starts feteching data for db or something else as you do hover on that element.
- little faster than useEffect.
- good for optimization.