class SwapiService {

  async getResource(url) {
    const _baseUrl = 'https://swapi.co/api';

    const res = await fetch(`${_baseUrl}${url}`);

    if (!res.ok) {  // Если код ответа сервера не 200-299, то генерируем ошибку и она попадает в блок catch
      throw new Error(`Could not fetch ${url}, received ${res.status}.`);
    }

    // Если все OK, то возвращаем данные в виде JSON объекта
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  async getPerson(id) {
    const res = await this.getResource(`/people/${id}/`);
    return res.results;
  }
  
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${id}/`);
    return res.results;
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  async getStarship(id) {
    const res = await this.getResource(`/starships/${id}/`);
    return res.results;
  }

}