import { getPeopleDetails } from "../../../services";

const initialState = { 
  data: {},
  isLoading: true,
};

const ON_SET_STATE = 'peopleDetails/ON_SET_STATE';

export const handleGetPeopleDetails = (id) => async dispatch => {
  try {
    dispatch(onSetState('isLoading', true))

    const response = await getPeopleDetails(id);

    if(response.status === 200){
      dispatch(onSetState('data', response.data))
    }

    dispatch(onSetState('isLoading', false))
  } catch (error) {
    dispatch(onSetState('isLoading', false))
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