import React from 'react';   // 核心库
import ReactDOM from 'react-dom'; // DOM渲染库

/**
 * React元素都是不可变对象
 * React只会更新必要的部分
 * 如果说新老的虚拟DOM是一样的则不做任何改变
 */

 function tick() {
   const element = <div><p>时间</p>{new Date().toLocaleTimeString()}</div>

    ReactDOM.render(
      element, document.getElementById('root')
    )
 }

 setInterval(tick, 1000)