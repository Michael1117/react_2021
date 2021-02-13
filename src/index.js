import React from 'react';   // 核心库
import ReactDOM from 'react-dom'; // DOM渲染库

// 当你map的时候，是把一个字符串数组映射为了一个li的React元素数组
// 在列表中的每一个子元素都应该有一个唯一的key属性
// 原因是为了高效的dom  diff
let names = ['zhangsan', 'lisi', 'wangwu']
let elements = names.map((item, index) => <li key={item}>{item}</li>)

ReactDOM.render(
  <ul>{elements}</ul>,
  document.getElementById('root')
)

let elements2 = names.reverse().map((item, index) => <li key={item}>{item}</li>)

ReactDOM.render(
  <ul>{elements2}</ul>,
  document.getElementById('root')
)