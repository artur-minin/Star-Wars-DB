import React, { Component } from 'react';

import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


export default class App extends Component {

  // Примитивная реализация "авторизации" для изучения компонента Redirect из react-router-dom
  state = {
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  swapiService = new SwapiService();

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <React.Fragment>

              <Header />
              <RandomPlanet />

              <Switch>
                <Route path='/'
                      render={() => <h2>Welcome to Star DB!</h2>}
                      exact={true} />
                
                <Route path='/people/:id?' component={PeoplePage} />
                
                <Route path='/planets/' component={PlanetsPage} />

                <Route path='/starships/'
                      component={StarshipsPage}
                      exact={true}/>
                <Route path='/starships/:id'
                  render={({ match }) => {                  
                    const { id } = match.params;
                    return <StarshipDetails itemId = {id} />
                  }} />
                
                <Route path='/secret' render={ () => (
                  <SecretPage isLoggedIn = { isLoggedIn } />
                  )} />

                <Route path='/login' render={ () => (
                  <LoginPage
                    isLoggedIn = { isLoggedIn }
                    onLogin = { this.onLogin }/>
                )} />
                
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </React.Fragment>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };

  /* Компонент Router оборачивает те компоненты, внутри которых будет происходить роутинг.
     Компонент Route определяет какие компоненты показывать при определенном url. */ 

};