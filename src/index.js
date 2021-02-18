import React from "./react";
import ReactDom from "./react-dom";

/**
 * 组件的状态
 * 组件数据源有1个是属性  是父组件给子组件的  不可修改
 * 另一个就是状态  是内部初始化的， 改变状态的唯一方式就是setState
 * 属性和状态都可以影响视图，他们改变了都会引起视图的更新
 */

 /**
  * 1. 不要直接修改state  直接修改不能刷新页面 setState包含了刷新界面的操作， 就是让真实DOM和最新虚拟DOM保持 一致
  * 2. setState 的更新可能会被合并  说明setState里传的对象会跟老的对象进行合并， 并不会直接  覆盖
  * 
  *   老状态中有新状态中也有  则更新
  *   老状态中没有新状态中有  则添加
  *   老状态中有新状态没有则保持原值
  * 3. setState 的更新可能是异步的
  *   在事件处理函数里setState的时候并不会直接修改状态，而是先把partialState放入一个数组(链表中)缓存起来， 等事件执行结束了，再统一进行更新
  */

class Counter extends React.Component {
  // state = { date: new Date() }  // 两种定义初始状态的方式
  constructor(props) {
    super(props); // this.props = props;
    this.state = { number: 0,  name: '计数器' }
  }
 /*  componentWillMount() {
    // 组件将要挂载
  }

  componentDidMount() {
    // 组件挂载完成
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  } */
  /**
   * let updateQueue = []
   * updateQueue.push({number: this.state.number + 1})
   */
  handleClick = () => {
    /* this.setState({ number: this.state.number + 1 , age: 18})
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1})
    console.log(this.state.number) */
    /* this.setState({ number: this.state.number + 1 } , () => {
      console.log(this.state.number)
    }) */

    this.setState({ number: this.state.number + 1 , age: 18})
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1})
    console.log(this.state.number)
    /* this.setState(prevState => ({number: prevState.number + 1 }), () => {
      console.log('3', this.state.number)
    })
    console.log('1', this.state.number)
    this.setState(prevState => ({number: prevState.number + 1 }), () => {
      console.log('4', this.state.number)
    })
    console.log('2', this.state.number) */
  }
  render() {
    return (
      <div>
        <h1>{this.state.number} : {this.state.name} </h1>
        <button onClick={this.handleClick}></button>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}
ReactDom.render(<Counter/>, document.getElementById("root"));

/**
 * 绑定事件的时候  虚拟DOM  JSX绑定和原生DOM不一样
 * 1. 属性名  JSX  onClick   原生DOM  onclick
 * 2.  值  JSX 函数的指针  函数变量名  原生  字符串
 */