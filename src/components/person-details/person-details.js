import React, { Component } from 'react';

import Preloader from '../preloader';
import SwapiService from "../../services/swapi-service";
import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  // Когда компонент отрисуется на странице автоматически вызовется функция updatePerson
  componentDidMount() {
    this.updatePerson();
    this.setState({
      loading: false
    })
  }

  /* Метод "componentDidUpdate" автоматически вызывается при обновлении компонента.
     Принимает на вход предыдущий объект props и предыдущий state */
  componentDidUpdate(prevProps) {
    /* Если текущее значение personId не соответствует значению personId из предыдущего объекта props, 
       то текущее значение personId обновляется с помощью функции updatePerson */
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        loading: true
      })
      this.updatePerson();
    }
  }

  updatePerson() {
   const { personId } = this.props;
    if (!personId) {
      return;
    }


    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person, loading: false });
      });
  }


  renderDetails( person ) { 
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
      <React.Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Details" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { person, loading } = this.state;

    const items = this.renderDetails(person);

    const content = loading ? <Preloader /> : items;
    

    return (
      <div className="person-details card">
        { content }        
      </div>
    )

  }
}