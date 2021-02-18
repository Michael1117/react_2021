export function updateComponent(componentInstance) {
    let element = componentInstance.render();   // 根据新的属性和状态得到新的element
    let { type, props } = element;
    
    let newDOM = createDOM(type, props, componentInstance)    // 根据新的element得到新的DOM元素
    //console.log(newDOM)
    // componentInstance.dom.parentNode root Div
    // 把老的DOM节点替换成新的DOM节点
    componentInstance.dom.parentNode.replaceChild(newDOM, componentInstance.dom);
    componentInstance.dom = newDOM;
}

function render(element, container, componentInstance) {
    if (typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }
    let type, props;
    debugger
    console.log(element)
    type = element.type;    // Counter组件
    props = element.props;
    //console.log(type)
    let isReactComponent = type.isReactComponent;
    //let componentInstance
    if (isReactComponent) { // 判断是否是一个类组件
        componentInstance = new type(props);
        element = componentInstance.render();
        type = element.type;        // 重新得到这个React元素的类型
        props = element.props   // 
    }
    else if (typeof type === 'function') {   //  说明是一个函数组件
        element = type(props);  // 函数组件执行后  会返回一个React元素   
        type = element.type;    // 重新得到这个React元素的类型
        props = element.props;  //  和属性对象
    }
    
    let dom = createDOM(type, props, componentInstance)
    //console.log(dom)
    if(isReactComponent && componentInstance) {
        // 如果当前渲染的是一个类组件， 就让这个类组件的实例的 dom 指向这个类组件创建出来的真实dom
        componentInstance.dom = dom
    }
    container.appendChild(dom)
}

/**
 * 合成事件
 * 在事件处理函数执行前要把批量更新模式设置为true
 * 这样的话在函数执行过程中就不会直接更新界面和状态了， 只会缓存新的状态到updateQueue里
 * 等事件处理函数结束后才会进行实际更新
 * 事件委托  把所有的事件监听都委托给document
 * @param {*} dom 
 * @param {*} eventType 
 * @param {*} listener 
 * @param {*} componentInstance 
 */

 // dom绑定的真实DOM元素， onClick  handleClick componentInstance
 // Counter
function addEvent(dom, eventType, listener, componentInstance) {
    eventType = eventType.toLowerCase()     // onClick => onclick
    let eventStore = dom.eventStore || (dom.eventStore = {});
    // eventStore["onclick"] = {listener, componentInstance}
    eventStore[eventType] = { listener, componentInstance }
    // document  click dispatchEvent
    //document.addEventListener(eventType.slice(2), dispatchEvent, false)
}

document.addEventListener('click', dispatchEvent, false)

function dispatchEvent(event) { // event是原生DOM事件
    let {type, target } = event;        // 取出事件的类型click  事件源 button
    while(target) {
        let {eventStore} = target;
        if (eventStore) {
            let {listener, componentInstance} = eventStore['on' + type] // onclick
            if (listener) { // 如果有监听函数的话
                if (componentInstance) componentInstance.isBatchingUpdate = true
                listener.call(null, event);
                if (componentInstance) {
                    componentInstance.isBatchingUpdate = false;
                    componentInstance.forceUpdate();
                }
            }
        }
        target = target.parentNode
    }
}

function createDOM(type, props, componentInstance) {
    let dom = document.createElement(type)
    for (let propName in props){    // 循环每一个特性
        if (propName === 'children') {
            //console.log(props.children)
            //let a = props.children;
            props.children.forEach(child => render(child, dom ,componentInstance))
        } else if(propName === 'className') {
            dom.className = props[propName];
        } else if (propName === 'style'){
            let styleObj = props[propName];
            for (let attr in styleObj) {
                dom.style.fontSize = '50px'
                dom.style[attr] = styleObj[attr]
            }
        } else if(propName.startsWith('on')) {
            //dom[propName.toLowerCase()] = props[propName]
            // dom绑定的真实DOM元素， propName=onClick listener=handleClick componentInstance
            // Counter
            addEvent(dom, propName, props[propName], componentInstance)
        } else {
            dom.setAttribute(propName, props[propName])
        }
    }
    return dom;
}
export default {
    render
}