import React, { Component } from 'react';

import Preloader from '../preloader';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;

      /* Метод children обекта props дает доступ к тому, что мы передали в тело этого элемента.
         В методе children может быть любой тип данных(втч. блок JSX кода): строка, функция, объект и т.д. */
      const label = this.props.children(item);
      return (
        <li className="list-group-item"
          key={id}
          /* Объект props сущ. всегда, из него можно получить доступ к данным, 
          передаваемым в данный эл-т в кач-ве атрибутов */
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) return <Preloader />;
    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
