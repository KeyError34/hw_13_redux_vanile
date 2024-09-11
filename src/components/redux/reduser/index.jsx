const initialState = {
  users: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Jack Daniels' },
    { id: 4, name: 'Emily Davis' },
  ],
  filter: '',
};
const reducerFilterName = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducerFilterName;