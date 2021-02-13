import React from 'react';   // 核心库
import ReactDOM from 'react-dom'; // DOM渲染库

/**
 * 
 * 把h1元素渲染到root节点的内部
 * 看起来像html,但是其实是JS, 它并不是标准的JS语法
 * 在webpack打包的时候，会把这种JSX语法转成纯的JS代码， 所以在浏览器就可以运行了
 */

 /**
  *  什么叫React元素
  *   是React应用的最小单位，它描述了你在屏幕上看到的内容
  *   React元素的本质是普通的 JS 对象
  *   ReactDOM会保证浏览器中的DOM和你的React元素一致
  */

//  let element = <h1 id="title">hello<h2>world</h2></h1>
/* ReactDOM.render(
  <h1>hello</h1>,
  document.getElementById('root')
);
 */

/* function createElement(type, config = {}, ...children) {
  return {
    //$$typeof: Symbol.for('react.element'),
    type,
    props: {...config, children}
  }
}

 let element = createElement('h1', {id: 'title'}, 'hello', createElement('h2', null, 'world'))

 console.log(element) */

 let name = 'Michael'
 let element = <h1 id="title">hello {name}</h1>

 ReactDOM.render(
   element,
   document.getElementById('root')
 )