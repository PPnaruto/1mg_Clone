import axios from "axios";

const setLoading = (dipatch) => {
  dipatch({
    type: "LOADING",
  });
};

const setError = (dispatch) => {
  dispatch({
    type: "ERROR",
  });
};

const setSuccess = (dispatch, payload) => {
  dispatch({
    type: "SUCCESS",
    payload,
  });
};

const fetchData = (category) => {
  return async (dispatch, getState) => {
    try {
      setLoading(dispatch);
      const { data } = await axios.get(
        `http://localhost:8080/products?category=${category}`
      );
      setSuccess(dispatch, data);
    } catch (error) {
      setError(dispatch);
    }
  };
};

export default fetchData;