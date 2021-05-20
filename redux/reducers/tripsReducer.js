const initialState = {
  id: "",
  index: 1,
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TRIP": {
      return {
        id: action.payload.id,
        index: action.payload.index,
      };
    }
    default:
      return { ...state };
  }
};

export default tripsReducer;
