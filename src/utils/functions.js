import queryString from 'query-string';

export const getParamsQuery = query => 
  queryString.parseUrl(query).query;

export const getIdByUrl = text => {
  const arr = text.split('/');

  return arr[arr.length - 2];
}