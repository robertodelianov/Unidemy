export const changeTrip = (id, index) => (dispatch) => {
  dispatch({
    type: "CHANGE_TRIP",
    payload: {
      id: id,
      index: index,
    },
  });
};
