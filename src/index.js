/* import React from "./react"; // 核心库
import ReactDOM from "./react-dom"; // DOM渲染库


let element = React.createElement("h1", {
  className: 'title',
  style: {
    color: 'red'
  }
}, "hello", React.createElement("span", null, "world"))

ReactDOM.render(element, document.getElementById('root')) */
import React from "./react";
import ReactDom from "./react-dom"


/* function Welcome() {
  return React.createElement("h1", {
    className: 'title',
    style: {
      color: 'red',
      fontSize: '50px'
    }
  }, 'hello', React.createElement("span", null, "world"))
} */

class Welcome extends React.Component {
  render() {
    return React.createElement("h1", {
      className: 'title',
      style: {
        color: 'red',
        fontSize: '50px'
      }
    }, 'hello1', React.createElement("span", null, "world"))
  }
}
//let element = <Welcome/>
// createElement的类型可能是一个函数，也可以是一个字符串。原生DOM是字符串，类组件和函数  是function
let element = React.createElement(Welcome, {});
console.log(element)

ReactDom.render(element, document.getElementById('root'))