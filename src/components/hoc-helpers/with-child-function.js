import React from 'react';

/* withChildFunction - функция, возвращающая функцию.
                      В первую функцию передаем параметр(fn),
                      который будет использоваться в компоненте "Wrapped" как this.props.children. */
const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    // props передается в ItemList в качестве аргумента
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

export default withChildFunction;