/**
 * JS其实并没有类的概念
 * class编译之后也是一个函数，为了区分这个函数是类组件还是函数组件，增加isReactComponent属性
 * 
 */
export class Component{
    static isReactComponent = true;     // 是一个组件
    constructor(props) {
        this.props = props
    }   
    // 部分状态
    setState(partialState) {

    }
}

export function createElement(type, config = {}, ...children) {
    let props = {...config, children}
    return {
        type,
        props
    }
}


export default {
    createElement,
    Component
}