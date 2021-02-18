import { updateComponent } from "./react-dom";

/**
 * JS其实并没有类的概念
 * class编译之后也是一个函数，为了区分这个函数是类组件还是函数组件，增加isReactComponent属性
 *
 */
export class Component {
  static isReactComponent = true; // 是一个类组件
  constructor(props) {
    this.props = props;
    this.updateQueue = []; // 这里放着临时更新队列
    this.isBatchingUpdate = false; // 是否处于批量更新模式
  }
  // 部分状态
  setState(partialState) {
    this.updateQueue.push(partialState);
    if (!this.isBatchingUpdate) {
      // 如果不是处于批量更新模式，则直接更新
      this.forceUpdate();
    }
  }
  forceUpdate() {
    this.state = this.updateQueue.reduce((accumulate, current) => {
      let nextState =
        typeof current === "function" ? current(accumulate) : current;
      accumulate = { ...accumulate, ...nextState };
      return accumulate;
    }, this.state);
    // this.state = { name: '计数器', number: 2 }
    this.updateQueue.length = 0; // 清空更新队列
    updateComponent(this);
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
  Component,
};
