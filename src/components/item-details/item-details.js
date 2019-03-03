import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary';
import Preloader from '../preloader';
import './item-details.css';

// Компонент Record вставляет данные в поля, в зависимости от переданных аргументов
const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  // Когда компонент отрисуется на странице автоматически вызовется функция updatePerson
  componentDidMount() {
    this.updateItem();
    this.setState({
      loading: false
    })
  }

  /* Метод "componentDidUpdate" автоматически вызывается при обновлении компонента.
     Принимает на вход предыдущий объект props и предыдущий state */
  componentDidUpdate(prevProps) {
    /* Если текущее значение personId не соответствует значению personId из предыдущего объекта props, 
       то текущее значение personId обновляется с помощью функции updatePerson */
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
    
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    
    if (!itemId) {
      return;
    };

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }


  renderDetails( item, image ) { 
    const { name } = item;
    
    return (
      <React.Fragment>
        <img className="item-image"
          src={image}
          alt="Details" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              /* React.Children - api для работы с 'потомками' эл-та.
                 Здесь метод map аналогичен одноименному методу для массивов, но для реакт-элементов*/
              React.Children.map(this.props.children, (child) => {
                /* cloneElement копирует каждый 'child' из св-ва props.children
                   и заменяет на его же копию, добавляя св-во item, в котором содержатся данные ответа от сервера. */
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { item, image, loading } = this.state;

    if (!item) {
      return <span className='alternative'>Select item from list</span>;
    };

    const items = this.renderDetails(item, image);
    const content = loading ? <Preloader /> : items;
    
    return (
      <ErrorBoundary>
        <div className="item-details card">
          {content}
        </div>
      </ErrorBoundary>
    );

  };
};