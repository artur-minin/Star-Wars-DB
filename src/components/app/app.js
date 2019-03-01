import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
 
import './app.css';

export default class App extends Component {

  state = {
    selectedPerson: null,
    hasError: false
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };


  /* Метод "componentDidCatch" отлавливает ошибки, которые произошли в методе жизненного цикла
     ниже по иерархии.
     Не обрабатывает ошибки в even listener'ах и асинхронном коде.
     Принцип похож на try/catch. */
  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }
  

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  };

};