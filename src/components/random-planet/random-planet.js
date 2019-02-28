import React, { Component } from 'react';

import Preloader from '../preloader'
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  // Конструктор вызывается при создании класса, например при загрузке страницы
  constructor() {
    super();
    this.updatePlanet();
  }

  // Функция получает объект с необходимыми св-ми из swapi-service и перезаписывает state этими данными
  onPlanetLoaded = (planet) => {
    // В данном случае меняем state напрямую т.к. он не зависит от предыдущего состояния
    this.setState({ planet, loading: false })
  }

  updatePlanet() {
    const id = 3;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet, loading } = this.state;
    
    // Если контент еще не загружен, то отображается preloader иначе content
    const preloader = loading ? <Preloader /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { preloader }
        { content }
      </div>
    )

  }
}

// PlanetView отвечает за отображение данных и картинки планеты из блока random-planet
const PlanetView = ({ planet }) => {

  // Деструктурируем св-ва из объекта planet
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    // React.Fragment - это элемент-обертка, необходимый для группировки эл-ов, т.к. функция render может возвращать только 1 эл-т
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diamater</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}