import { Weather } from '../reducers/weather';

export enum WeatherActionType {
  GET_WEATHER_PENDING = 'GET_WEATHER_PENDING',
  GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS',
  GET_WEATHER_FAIL = 'GET_WEATHER_FAIL',
}

interface actionWeatherPending {
  type: WeatherActionType.GET_WEATHER_PENDING;
}

interface actionWeatherSuccess {
  type: WeatherActionType.GET_WEATHER_SUCCESS;
  payload: Weather[];
}

interface actionWeatherFail {
  type: WeatherActionType.GET_WEATHER_FAIL;
  payload: string;
}

export type WeatherAction = actionWeatherPending | actionWeatherSuccess | actionWeatherFail;