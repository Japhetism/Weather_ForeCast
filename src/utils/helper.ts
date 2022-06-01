import moment from "moment";
import { temperatureOptions } from '../fixtures/temperatureOptions';

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getDailyWeather = (weather:Array<object>) => {
  return weather.map((item:any, index:any) => {
    const date = moment(item.dt_txt).add(index, 'days').format('DD MMMM YYYY');
    item['date'] = date
    return item
  })
}

export const getTempUnitSymbol = (tempUnit:string) => {
  let tempObj = temperatureOptions.find(item => item.unit === tempUnit);
  return tempObj?.symbol;
}

export const getBarChartData = (weather:Array<object>) => {
  let labels = weather.map((item:any) => item.date)
  let values = weather.map((item:any) => item.main.temp)
  return {
    labels,
    values
  }
}