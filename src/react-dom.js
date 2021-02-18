function render(element, container) {
  if (typeof element === "string" || typeof element === "number") {
    return container.appendChild(document.createTextNode(element));
  }

  let { type, props } = element;
  if (typeof type === 'function') {
      element = type(props)
      type = element.type
      props = element.props
  }
  let dom = createDOM(type, props)
  container.appendChild(dom);
}

function createDOM(type, props) {
  let dom = document.createElement(type);
  for (let propName in props) {
    if (propName === "children") {
      props.children.forEach((child) => {
        render(child, dom);
      });
    } else if (propName === "style") {
      let styleObj = props[propName];
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else if (propName === "className") {
      dom.className = props[propName];
    } else {
      dom.setAttribute(propName, props[propName]);
    }
  }
  return dom;
}
export default { render };
