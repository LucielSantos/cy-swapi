import { combineReducers } from 'redux';

import home from '../pages/home/home-state';
import main from '../pages/main/main-state';
import peoples from '../pages/people/people-state';

export const reducers = {
  home,
  main,
  peoples,
};

export default combineReducers(reducers);
