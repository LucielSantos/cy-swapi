import { combineReducers } from 'redux';

import home from '../pages/home/home-state';
import main from '../pages/main/main-state';

export const reducers = {
  home,
  main,
};

export default combineReducers(reducers);
