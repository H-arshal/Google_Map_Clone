// https://api.openweathermap.org/data/2.5/weather?lat={"20.745319"}&lon={"78.602196"}&appid={"d783c44dbe37d670abca025ef570980b"}






const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/46.95828/10.87152/hourly/',
  headers: {
    'X-RapidAPI-Key': 'c316d5601dmsh099d8eaef4a7c16p109e54jsnaf46e277c613',
    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});