////////////////////////////////////////////////////////////////////
//
//       API Class
//
////////////////////////////////////////////////////////////////////

class API {
  constructor(){
    this.url = "https://restcountries.eu/rest/v2/all";
    this.data = null;
    this.information = null;
  }

  api_call = () => {
    return fetch(this.url)
    .then((response) => response.json())
    .then(function(data){
      this.data = data;
      this.api_sort();
      return this.information;
    }.bind(this))

  }

  api_sort = () =>{
    var randomIndex = Math.floor(Math.random() * 250) + 1;
    var country = this.data[randomIndex];
    console.log(country);
    var infoObj = {
      name: country.name,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      flag: country.flag,
      population: country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      language: country.languages[0].name
    }

    this.information = infoObj;
  }
}

export default API;
