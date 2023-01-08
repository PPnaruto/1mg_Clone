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

const setAgeFilter = (dispatch, payload) => {
  dispatch({
    type: "SET_AGE_FILTER",
    payload,
  });
};

const fillAgeFilter = (dispatch, payload) => {
  dispatch({
    type: "FILL_AGE",
    payload,
  });
};

const setGenderFilter = (dispatch, payload) => {
  dispatch({
    type: "SET_GENDER_FILTER",
    payload,
  });
};

const fillGenderFilter = (dispatch, payload) => {
  dispatch({
    type: "FILL_GENDER",
    payload,
  });
};

export {
  setSort,
  setBrandFilter,
  fillBrandFilter,
  setAgeFilter,
  fillAgeFilter,
  setGenderFilter,
  fillGenderFilter,
};
