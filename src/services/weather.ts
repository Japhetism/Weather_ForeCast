import { Dispatch } from 'redux';
import axios from 'axios';
import {
  fetchWeatherPending, 
  fetchWeatherSuccess, 
  fetchWeatherError 
} from '../redux/actionCreators/weather';
import { getDailyWeather } from '../utils/helper';

const fetchWeather = (cityName:string, unit:string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchWeatherPending());
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&cnt=5&APPID=${process.env.REACT_APP_WEATHER_APP_ID}`)
    .then(function (response) {
      if (response!.data) {
        dispatch(fetchWeatherError(response!.data!.list));
      }
      dispatch(fetchWeatherSuccess(getDailyWeather(response!.data!.list)));
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default fetchWeather;