import React from "react"; // 核心库
import ReactDOM from "react-dom"; // DOM渲染库

/**
 *  如何定义组件 和组件的属性
 *  函数式组件  就是一个函数  接收一个属性对象 返回一个react元素
 *  类组件  就是一个类，需要有一个render方法， render方法需要返回一个并且仅能返回一个顶级React元素
 */

/**
 *  如何渲染函数组件？
 *  1. 封装函数组件的属性对象 props = {name: 'title'}
 *  2. 把props传递给Welcome1这个函数，返回一个React元素
 *  3. 把这个React元素，也就是虚拟DOM渲染到真实DOM上
 */
function Welcome1(props) {
  return <h1>hello {props.name}</h1>;
}

/**
 *  如何渲染函数组件？
 *  1. 封装函数组件的属性对象 props = {name: 'title'}
 *  2. new Welcome2(props); 创建Welcome2这个类的实例，传递props进去  this.props
 *  3. 调用实例的render方法， 得到返回的react元素
 *  4. 把这个React元素， 也就是虚拟DOM渲染到真实DOM上
 */

class Welcome2 extends React.Component {
  constructor(props) {
    debugger;
    super(props);

    //this.props = props;
  }
  render() {
    return <h1>hello {this.props.name}</h1>;
  }
}

/**
 * 1. 类组件   函数组件和类组件首字母必须大写
 * React 是通过首字母来区分到底是自定义组件(大写)你还是原生DOM组件(小写)
 * 2. 组件必须在使用的时候先定义
 * 3. 必须只能返回一个顶级元素
 * 4. props
 */

 /**
  * 1. props具有只读性
  * 2. 不管以何种方式声明组件， 都不能修改自己的props
  *  纯函数  1. 不能改变输入的值， 2. 如果输入的值相当， 输出结果也一定相同
  */
let element = <Welcome2 name="title"></Welcome2>;

ReactDOM.render(element, document.getElementById("root"));
