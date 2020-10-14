import { getPeoples } from '../../services';
import { getParamsQuery } from '../../utils';

const initialState = { 
  rows: [],
  nextPage: false,
  prevPage: false,
  currentPage: 0,
  isLoading: true,
};

const ON_SET_STATE = 'peoples/ON_SET_STATE';

export const handleGetPeoples = (search = '', page = 1, currentPage = 0) => async dispatch => {
  try {
    dispatch(onSetState('isLoading', true));

    const response = await getPeoples(search, page);

    dispatch(onSetState('rows', response.data.results));

    dispatch(onSetState('nextPage', response.data.next ? getParamsQuery(response.data.next).page : false));
    dispatch(onSetState('prevPage', response.data.previous ? getParamsQuery(response.data.previous).page : false));

    dispatch(onSetState('currentPage', page < currentPage  ? currentPage - 1 : currentPage + 1));

    dispatch(onSetState('isLoading', false));
  } catch (error) {
    console.log(error)
    dispatch(onSetState('rows', []));
    dispatch(onSetState('isLoading', false));
  }
}

const onSetState = (field, value) => ({
  type: ON_SET_STATE,
  payload: {field, value},
});

export default (state = initialState, {type, payload}) => {
  switch (type) {
    
    case ON_SET_STATE:
      return {...state, [payload.field]: payload.value};

    default:
      return state;
  } 
};