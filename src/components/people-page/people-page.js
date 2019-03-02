import React, { Component } from 'react';

import Row from '../row'
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorBoundary from "../error-boundary";

import SwapiService from "../../services/swapi-service";

import './people-page.css';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };


  render() {

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
