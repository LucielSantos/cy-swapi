import { getPeoples } from '../../services';

const initialState = { 
  rows: [],
  count: 0,
  nextPage: false,
  prevPage: false,
  isLoading: true,
};

const ON_SET_STATE = 'peoples/ON_SET_STATE';

export const handleGetPeoples = (search, page) => async dispatch => {
  try {
    dispatch(onSetState('isLoading', true));

    const response = await getPeoples(search, page);

    console.log(response)

    dispatch(onSetState('rows', response.data.results));
    dispatch(onSetState('nextPage', response.data.next));
    dispatch(onSetState('prevPage', response.data.previous));
    dispatch(onSetState('count', response.data.count));

    dispatch(onSetState('isLoading', false));
  } catch (error) {
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