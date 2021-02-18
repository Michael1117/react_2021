export class Component {
    static isReactComponent = true; // 是一个组件
    constructor(props) {
        this.props = props
    }
}

export function createElement(type, config = {}, ...children) {
  let props = { ...config, children };
  return {
    type,
    props,
  };
}

export default {
  createElement,
  Component
};
