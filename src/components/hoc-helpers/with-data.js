import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Preloader from '../preloader';

// hoc - higher order components(Компоненты высшего порядка) - функции, которые оборачивают компонент

/* Компонент withData оборачивает компонент и предоставляет ему данные для рендеринга, 
   взяв всю логику работы с данными на себя. */
const withData = (View) => {
  // Функция возвращает анонимный класс
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    // Когда компонент появится на странице
    componentDidMount() {

      this.setState({
        loading: true,
        error: false
      });

      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })

        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });

    };

    render() {
      const { data, loading, error } = this.state;

      // Если данные отсутствуют, то отображаем индикатор загрузки
      if (loading) {
        return <Preloader />;
      }

      // При ошибке выводим уведомление для пользователя
      if (error) {
        return <ErrorIndicator />;
      }

      // Передаем данные для рендеринга(data) в компонент в виде props
      return <View {...this.props} data={data} />;
    }
  };
}

export default withData;
