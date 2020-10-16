import queryString from 'query-string';
import { onSetTitle } from '../pages/main/main-state';

import { store as storeRedux } from '../store/store';

export const getParamsQuery = query => 
  queryString.parseUrl(query).query;

export const getIdByUrl = text => {
  const arr = text.split('/');

  return arr[arr.length - 2];
}

export const setTitle = (title = false) =>
  storeRedux.dispatch(onSetTitle(title));