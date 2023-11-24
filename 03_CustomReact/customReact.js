

const rootContainer = document.querySelector('#root');
const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target: '_blank',
    },
    children: "click me to visite google"
    
    
}
function customReact(reactElement,rootContainer){
    const customReactElement  = document.createElement(reactElement.type)
customReactElement.innerHTML = reactElement.children
for (let propname in reactElement.props) {
    if(propname=== "children") {
        continue
    }
    customReactElement.setAttribute(propname,reactElement.props[propname])
    }
    
    rootContainer.appendChild(customReactElement)
}
customReact(reactElement,rootContainer)




