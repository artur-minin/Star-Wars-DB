import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

// Компонент Row оборачивает любые 2 элемента и располагает их друг возле друга, образуя строку
const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

Row.propTypes = {
  /* Параметр left должен быть передан в компонент в виде того, 
     что может быть отренедено(числа, строки, элементы DOM, массивы). */
  left: PropTypes.node,
  /* Параметр right должен быть передан в компонент в виде того, 
     что может быть отренедено(числа, строки, элементы DOM, массивы). */
  right: PropTypes.node
}

export default Row;
