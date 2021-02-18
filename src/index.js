import React from "./react";
import ReactDom from "./react-dom";


/* let element = React.createElement("h1", {
  className: 'title',
  style: {
    color: 'yellow',
    fontSize: '60px'
  }
}, "hello", React.createElement("span", null, "world")) */

/* function Welcome(props) {
  return React.createElement("h1", {
    className: 'title',
    style: {
      color: 'yellow',
      fontSize: '60px'
    }
  }, "hello1", React.createElement("span", null, "world1"))
} */



//let element = <Welcome/>
let element = React.createElement(Welcome, {})
//console.log(element)
ReactDom.render(element, document.getElementById('root'))