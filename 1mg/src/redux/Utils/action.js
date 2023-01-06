const setSort = (dispatch, payload) => {
  dispatch({
    type: "SET_SORT",
    payload,
  });
};

const setBrandFilter = (dispatch, payload) => {
  dispatch({
    type: "SET_BRAND_FILTER",
    payload,
  });
};

const fillBrandFilter = (dispatch, payload) => {
  dispatch({
    type: "FILL_BRAND",
    payload,
  });
};

export { setSort, setBrandFilter, fillBrandFilter };
