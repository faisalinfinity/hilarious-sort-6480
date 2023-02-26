import axios from "axios";
import * as types from "./productsType";
export const getDataElectronic =
  (searchValue, getProductParam) => (dispatch) => {
    if (searchValue == null) {
      searchValue = "";
    }
    dispatch({ type: types.PRODUCT_LOADING });

    axios
      .get(`http://localhost:8080/electronic?q=${searchValue}`, getProductParam)
      .then((res) =>
        dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data })
      )
      .catch((e) => {
        dispatch({ type: types.PRODUCT_ERROR, payload: e });
      });
  };
export const getDataFashion = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`http://localhost:8080/fashion?q=${searchValue}`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => {
      dispatch({ type: types.PRODUCT_ERROR, payload: e });
    });
};
export const getDataHome = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`http://localhost:8080/home?q=${searchValue}`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => {
      dispatch({ type: types.PRODUCT_ERROR, payload: e });
    });
};
export const getDataToys = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`http://localhost:8080/toys?q=${searchValue}`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => {
      dispatch({ type: types.PRODUCT_ERROR, payload: e });
    });
};
export const getDataJewellary =
  (searchValue, getProductParam) => (dispatch) => {
    if (searchValue == null) {
      searchValue = "";
    }
    dispatch({ type: types.PRODUCT_LOADING });
    axios
      .get(`http://localhost:8080/jewellary?q=${searchValue}`, getProductParam)
      .then((res) =>
        dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data })
      )
      .catch((e) => {
        dispatch({ type: types.PRODUCT_ERROR, payload: e });
      });
  };
export const getDataSports = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`http://localhost:8080/sports?q=${searchValue}`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => {
      dispatch({ type: types.PRODUCT_ERROR, payload: e });
    });
};
