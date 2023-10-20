import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { jsx as _jsx } from 'react/jsx-runtime.js'
import chai from "./chai"

function MyApp() {
    return (
        <a href='https://www.facebook.com'>Click me to join facebook</a>
        // transpiler convert the our html into js object behind the scene.
        // const reactElement = {
        //     type: "a",
        //     props: {
        //         href: "https://www.google.com",
        //         target: "_blank"
        //     },
        //     children: "click me"
        // }
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank"
//     },
//     children: "click me"
// }

const anotherElement = (
    <a href='https://www.instagram.com' target='_blank'>Click for insta</a>
)

const anotherUsername = "golu"
// const anotherUsername = "Gaurav Singh"
// That's how react convert our jsx into fundamental to create element or --- behind the scene.
const reactElement = React.createElement(
    // 'a',
    // { href: "https://www.codewithharry.com", target: "_blank" },
    // 'click me to visit codewithharry.com',
    // // After creating complete tree then our javascript variable injection comes into the picture.
    // anotherUsername

    // Another element created just for checking purpose.
    "h2",
    {},
    "Hand made element by: ",
    anotherUsername === "golu" ? "Gaurav Singh Jethuri" : "Unknown"
    // anotherUsername,
)
// where that username variable goes. which we have defined in App.jsx.
ReactDOM.createRoot(document.getElementById('root')).render(

    // App()
    // <MyApp />
    // MyApp(),
    // chai()
    // anotherElement
    // reactElement
    // till now you understand how html gets painted. 
    // let's see How javascript gets execute.
    <App />

)
