import { Dispatch } from 'redux';
import {
  fetchWeatherPending, 
  fetchWeatherSuccess, 
  fetchWeatherError 
} from '../redux/actionCreators/weather';

const fetchWeather = (cityName:string, unit:string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchWeatherPending());
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=`)
    .then(res => res.json())
    .then(res => {
      console.log("response is ", res)
      if (res.error) {
        dispatch(fetchWeatherError(res.error));
      }
      dispatch(fetchWeatherSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchWeatherError(error));
    })
  }
}

export default fetchWeather;