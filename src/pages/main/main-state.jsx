const initialState = { title: false };

const ON_SET_TITLE = 'main/ON_SET_TITLE'

export const onSetTitle = (title = false) => ({
  type: ON_SET_TITLE,
  payload: title,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_SET_TITLE:
      return {...state, title: action.payload}

    default:
      return state;
  }
};