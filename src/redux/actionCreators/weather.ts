import { WeatherActionType } from '../actionTypes/weather';
import { Weather } from '../reducers/weather';

export const fetchWeatherPending = () => {
  return {
    type: WeatherActionType.GET_WEATHER_PENDING
  }
}

export const fetchWeatherSuccess = (weather: Weather[]) => {
  return {
    type: WeatherActionType.GET_WEATHER_SUCCESS,
    payload: weather
  }
}

export const fetchWeatherError = (error: string) => {
  return {
    type: WeatherActionType.GET_WEATHER_FAIL,
    payload: error
  }
}