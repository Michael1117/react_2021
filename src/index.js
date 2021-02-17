import React from "react";
import ReactDom from "react-dom";

/**
 * 组件的状态
 * 组件数据源有1个是属性  是父组件给子组件的  不可修改
 * 另一个就是状态  是内部初始化的， 改变状态的唯一方式就是setState
 * 属性和状态都可以影响视图，他们改变了都会引起视图的更新
 */

class Clock extends React.Component {
  state = { date: new Date() }  // 两种定义初始状态的方式
  constructor(props) {
    super(props); // this.props = props;
    //this.state = { date: new Date() };
    // 其它地方要改变只能调用setState
  }
  componentWillMount() {
    // 组件将要挂载
  }

  componentDidMount() {
    // 组件挂载完成
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>当前的时间为： {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
ReactDom.render(<Clock />, document.getElementById("root"));
