function render(element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }
    let type, props;
    type = element.type;
    props = element.props;
    let isReactComponent = type.isReactComponent;
    if (isReactComponent) { // 判断是否是一个类组件
        let componentInstance = new type(props);
        element = componentInstance.render();
        type = element.type;        // 重新得到这个React元素的类型
        props = element.props   // 
    }
    else if (typeof type === 'function') {   //  说明是一个函数组件
        element = type(props);  // 函数组件执行后  会返回一个React元素   
        type = element.type;    // 重新得到这个React元素的类型
        props = element.props;  //  和属性对象
    }
    
    let dom = createDOM(type, props)
    container.appendChild(dom)
}

function createDOM(type, props) {
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
    return dom;
}
export default {
    render
}