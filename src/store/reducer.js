import { combineReducers } from 'redux';

import home from '../pages/home/home-state';
import main from '../pages/main/main-state';
import peoples from '../pages/people/people-state';
import peopleDetails from '../pages/people/details/peopleDetails-state';
import planets from '../pages/planet/planet-state';

export const reducers = {
  home,
  main,
  peoples,
  peopleDetails,
  planets,
};

export default combineReducers(reducers);
