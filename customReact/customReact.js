function customRander(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    domElement.innerHTML = reactElement.children;

    mainContainer.appendChild(domElement);
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
       if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "click me"
}
const mainContainer = document.querySelector("#root")

customRander(reactElement, mainContainer);