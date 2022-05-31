import { WeatherAction, WeatherActionType } from '../actionTypes/weather';

export interface Weather {
  id: string,
  name: string,
  min_size: string,
}

interface State {
  weather: Weather[],
  loading: boolean,
  error: string | null
}

export interface WeatherResponseState {
  weather: State
}

const initialState = {
  weather: [],
  loading: false,
  error: null
}


export const weatherReducer = (state = initialState, action: WeatherAction):State => {
  switch(action.type) {
    case WeatherActionType.GET_WEATHER_PENDING:
      return {
        loading: true,
        weather: [],
        error: null,
      }
    case WeatherActionType.GET_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
        error: null
      }
    case WeatherActionType.GET_WEATHER_FAIL:
      return {
        loading: false,
        error: action.payload,
        weather: []
      }
    default:
      return state;
  }
}

export default weatherReducer;

export const getWeather = (state:WeatherResponseState) => state.weather.weather;
export const getWeatherLoading = (state:WeatherResponseState) => state.weather.loading;
export const getWeatherError = (state:WeatherResponseState) => state.weather.error;