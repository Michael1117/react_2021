import React from "react"; // 核心库
import ReactDOM from "react-dom"; // DOM渲染库
import PropTypes from "prop-types";

/**
 *  如何 对属性进行类型校验
 *    组件封装好是给别人用的
 */

class Person extends React.Component {
  static defaultProps = {
    name: "张三",
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(["male", "female"]),
    hobby: PropTypes.arrayOf(PropTypes.string), // 字符串数组
    position: PropTypes.shape({
      // position的值是一个对象 key  x  y 值是number
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    // 属性对象  属性名称  组件名称  age是设置了一个函数，    自定义的校验器
    age(props, propName, componentName) {
      let age = props[propName];
      if (age < 0 || age > 120) {
        throw new Error(
          `Invalid prop ${propName} of value ${age} supplied to ${componentName}, expected age between 0 and 120`
        );
      }
    },
  };
  render() {
    let { name, age, gender, hobby, position, friends } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
            <td>爱好</td>
            <td>位置</td>
            <td>朋友</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{hobby.join(",")}</td>
            <td>{`x:${position.x}, y: ${position.y}`}</td>
            <td>{friends[0].name}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

// 先创建一个props对象
let props = {
  //name: 'Michael',
  age: 80,
  gender: "male",
  hobby: ["smoking", "drinking"],
  position: {
    x: 10,
    y: 10,
  },
  friends: [
    { name: "张三", age: 10 },
    { name: "李四", age: 12 },
  ],
};

let element = <Person {...props} />;
// 1. 拿到 props
let componentInstance = new Person(props);
let propTypes = Person.propTypes;
if (propTypes.name === PropTypes.string.isRequired) {
  if (!props.name) {
    throw new Error('属性名name必须提供')
  }
}

ReactDOM.render(element, document.getElementById("root"));

/**
 * 为什么  类型检查是静态属性啊
 * 什么时候动态  什么时候静态
 *    有些需要动态和静态都可以，那应该使用哪个？
 *      如果能使用类的静态属性实现，就不要用实例属性
 *      1. 使用方便  Person.propTypes
 *      2.  只会有一份， 节约内存  实例属性，每new 一个实例  都要创建一份。但是静态永远只有一份
 *          能共用就共用，节约资源，不能共用才需要每个一份
 */
