const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

const Api = {
  getCountry: async function getCountry(country) {
    const response = await fetch(`${path}/${country}`, headers);
    const data = await response.json();
    return data;
  }
}

export default Api;