import React, { Component } from 'react';

import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <React.Fragment>

              <Header />
              <RandomPlanet />

              <Route path='/'
                     render={() => <h2>Welcome to Star DB!</h2>}
                     exact={true}/>
              <Route path='/people' component = {PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships'
                     component={StarshipsPage}
                     exact={true}/>
              <Route path='/starships/:id'
                render={({ match }) => {
                  
                  const { id } = match.params;
                  return <StarshipDetails itemId = {id} />
                }}/>

            </React.Fragment>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };

  /* Компонент Router оборачивает те компоненты, внутри которых будет происходить роутинг.
     Компонент Route определяет какие компоненты показывать при определенном url. */ 

};