import React from 'react';
import PropTypes from 'prop-types';

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
      <li
        className="list-group-item"
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

/* Параметры по-умолчанию для компонента. 
   Аналогичны параметрам по - умолчанию для функций. */
ItemList.defaultProps = {
  // Если параметр onItemSelected не будет передан в компонент, то по-умолчанию он преобразуется в пустую функцию 
  onItemSelected: () => { }
};

/* propTypes определяет тип параметров для компонента. */
ItemList.propTypes = {
  // Параметр onItemSelected должен быть передан в виде функции(func)
  onItemSelected: PropTypes.func,
  // Параметр data должен обязательно передан в компонент(isRequired) в виде массивом(arrayOf) объектов(object) 
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Параметр children должен быть обязательно передан в компонент(isRequired) в виде функции(func)
  children: PropTypes.func.isRequired
};

export default ItemList;
