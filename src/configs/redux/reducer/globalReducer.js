const initialState = {
  name: "Esto",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Triramdani",
    };
  }
  return state;
};

export default globalReducer;
