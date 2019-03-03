import React, { Component } from 'react';

import Preloader from '../preloader';

// hoc - higher ordered components(Компоненты высшего порядка) - функции, которые оборачивают компонент

/* Компонент withData оборачивает компонент и предоставляет ему данные для рендеринга, 
   взяв всю логику работы с данными на себя. */
const withData = (View) => {
  // Функция возвращает анонимный класс
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {

      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });

    }

    render() {
      const { data } = this.state;

      // Если данные отсутствуют, то отображаем индикатор загрузки
      if (!data) return <Preloader />;

      // Передаем данные для рендеринга(data) в компонент в виде props
      return <View {...this.props} data={data} />
    }
  };
}

export default withData;
