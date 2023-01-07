const initial = {
  sort: "",
  brand_filter: [],
  age_filter: [],
  gender_filter: [],
};

const UtilReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_BRAND_FILTER":
      return {
        ...state,
        brand_filter: [...state.brand_filter, action.payload],
      };
    case "FILL_BRAND":
      return { ...state, brand_filter: action.payload };
    case "SET_AGE_FILTER":
      return { ...state, age_filter: [...state.age_filter, action.payload] };
    case "FILL_AGE":
      return { ...state, age_filter: action.payload };
    case "SET_GENDER_FILTER":
      return {
        ...state,
        gender_filter: [...state.gender_filter, action.payload],
      };
    case "FILL_GENDER":
      return { ...state, gender_filter: action.payload };
    default:
      return state;
  }
};

export default UtilReducer;
