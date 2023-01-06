const initial = {
  sort: "",
  brand_filter: [],
};

const UtilReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_BRAND_FILTER":
      return { ...state, brand_filter: action.payload };
    case "FILL_BRAND":
      return { ...state, brand_filter: action.payload };
    default:
      return state;
  }
};

export default UtilReducer;
