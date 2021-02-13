import React from 'react';   // 核心库
import ReactDOM from 'react-dom'; // DOM渲染库

/**
 *  如何定义组件 和组件的属性
 *  函数式组件  就是一个函数  接收一个属性对象 返回一个react元素
 *  类组件  就是一个类，需要有一个render方法， render方法需要返回一个并且仅能返回一个顶级React元素
 */


 function Welcome1(props) {
   return <h1>hello {props.name}</h1>
 }


 class Welcome2 extends React.Component{
   render () {
     return <h1>hello {props.name}</h1>
   }
 }