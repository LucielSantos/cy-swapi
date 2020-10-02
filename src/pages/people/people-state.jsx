import { getPeoples } from '../../services';

const initialState = { data: { } };

const ON_SET_DATA = 'peoples/ON_SET_DATA';

export const handleGetPeoples = (search, page) => async dispatch => {
  try {
    const response = await getPeoples(search, page)

    console.log(response)

    dispatch(onSetData(response.data))
  } catch (error) {
    dispatch(onSetData([]))
    console.log(error);
  }
}

const onSetData = (data) => ({
  type: ON_SET_DATA,
  payload: data,
});

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ON_SET_DATA:
      return {...state, data: action.payload};

    default:
      return state;
  } 
};