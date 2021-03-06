import { combineReducers } from 'redux';
import weatherReducer from './weather';

const reducers = combineReducers({
  weather: weatherReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;