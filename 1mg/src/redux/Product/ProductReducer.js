const initial = {
  products: [],
  isLoading: false,
  isError: false,
};

const ProductReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "ERROR":
      return { ...state, isLoading: false, isError: true };
    case "SUCCESS":
      return {
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
