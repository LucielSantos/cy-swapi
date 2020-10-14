import queryString from 'query-string';

export const getParamsQuery = query => 
  queryString.parseUrl(query).query;