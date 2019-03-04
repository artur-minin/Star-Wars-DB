import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Preloader from '../preloader';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  /* Значения по-молчанию для компонента.
     Аналогичны параметрам по-умолчанию у функций. */
  static defaultProps = {
    /* Если параметр updateInterval не будет передан в компонент, 
       то по - умолчанию он преобразуется в число 5000 */ 
    updateInterval: 5000
  }

  /* Определяет тип параметров компонента. */
  static propTypes = {
    // Параметр updateInterval должен быть числом(number)
    updateInterval: PropTypes.number
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  /* Метод "componentDidMount" автоматически вызывается когда элемент уже отрисован и находится на странице.
     Можно использовать вместо конструктора (как в данном случае) */
  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet()
    this.interval = setInterval( this.updatePlanet, updateInterval);
  }

  /* Метод "componentWillUnmount" автоматически вызывается перед тем как элемент будет удален.
     На момент вызова метода DOM-дерево еще содержит данный компонент. */
  componentWillUnmount() {
    clearInterval = (this.interval);
  }

  // Функция получает объект с необходимыми св-ми из swapi-service и перезаписывает в state эти данные
  onPlanetLoaded = (planet) => {
    // В данном случае меняем state напрямую т.к. он не зависит от предыдущего состояния
    this.setState({
      planet,
      loading: false
    })
  }

  /* Стрелочные функции необходимо использовать 
     когда функция будет вызываться в определенном контексте т.е. с this */
  updatePlanet = () => {
    // Рандомные числа от 2 до 18(включительно)
    const id = Math.floor(Math.random() * 18) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet, loading } = this.state;
        
    // Если контент еще не загружен, то отображается preloader иначе content
    const content = loading ? <Preloader /> : <PlanetView planet={planet} />;

    return (
      <div className="random-planet jumbotron rounded">
        <ErrorBoundary>
          {content}
        </ErrorBoundary>
      </div>
    )

  }
}

// PlanetView отвечает за отображение данных и картинки планеты из блока random-planet
const PlanetView = ({ planet }) => {

  // Деструктурируем св-ва из объекта planet
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    /* React.Fragment - это элемент-обертка, необходимый для группировки эл-ов, 
       т.к.функция render может возвращать только 1 эл - т */
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt={ name }/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diamater:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}