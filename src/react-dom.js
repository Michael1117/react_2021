function render(element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }
    let {type, props} = element;
    let dom = document.createElement(type)
    for (let propName in props){    // 循环每一个特性
        if (propName === 'children') {
            props.children.forEach(child => render(child, dom))
        } else if(propName === 'className') {
            dom.className = props[propName];
        } else if (propName === 'style'){
            let styleObj = props[propName];
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else {
            dom.setAttribute(propName, props[propName])
        }
    }

    container.appendChild(dom)
}


export default {
    render
}