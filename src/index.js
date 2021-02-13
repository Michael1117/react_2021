import React from "./react"; // 核心库
import ReactDOM from "./react-dom"; // DOM渲染库


let element = React.createElement("h1", {
  className: 'title',
  style: {
    color: 'red'
  }
}, "hello", React.createElement("span", null, "world"))

ReactDOM.render(element, document.getElementById('root'))