import axios from "axios"

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let weatherData = await getWeatherByCurrentLocation(lat, lon);

        resolve(weatherData);
      } catch (error) {
        
      }
    });
  });
};

const getWeatherByCurrentLocation = async (lat:number,lon:number) => {
  try{

  let url = `https://api.openweathermap.org/data/2.5/weather` +
  `?lat=${lat}` +
  `&lon=${lon}` +
  `&appid=${process.env.REACT_APP_WEATHER_API_KEY}` +
  `&units=metric`


  const response = await axios.get(url)

  console.log("response",response)
 
  return response.data
}
catch(e){
  console.log(e)
}
}

const getWeatherByCityName = async (name:string) => {

  if(name == "")
  name = "Jinju"

  let url = `https://api.openweathermap.org/data/2.5/weather`+
    `?q=${name}`+
    `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`+
    `&units=metric`

    const response = await axios.get(url)

    console.log(url)
 
    return response.data

}


export {getCurrentLocation, getWeatherByCityName, getWeatherByCurrentLocation}