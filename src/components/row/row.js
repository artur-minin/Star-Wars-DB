import React from 'react';

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

export default Row;
