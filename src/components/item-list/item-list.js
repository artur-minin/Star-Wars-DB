import React from 'react';

import ErrorBoundary from '../error-boundary';

import './item-list.css';


/* Компонент ItemList занимается исключительно рендерингом данных,
   предоставленных ему компонентом-оберткой "withData". 
   Компонент-функция получает все переданные ему данные через аргументы.*/
const ItemList = (props) => {

    /* Получаем данные для рендеринга из функции-обертки, 
       которая передает data в виде props в данный компонент */
  const { data, onItemSelected, children: renderLabel } = props;
  
  // Представляем полученные данные в виде элементов списка
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ErrorBoundary>
      <ul className="item-list list-group">
        {items}
      </ul>
    </ErrorBoundary>
  );
}

export default ItemList;
