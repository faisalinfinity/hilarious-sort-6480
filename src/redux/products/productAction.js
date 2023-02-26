import axios from "axios";
import { BASE_URL } from "../../constants/apiConstants";
import * as types from "./productsType";
export const getDataElectronic =
  (searchValue, getProductParam) => (dispatch) => {
    if (searchValue == null) {
      searchValue = "";
    }
    dispatch({ type: types.PRODUCT_LOADING });

    axios
      .get(`${BASE_URL}/electronic?q=${searchValue}`, getProductParam)
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
    .get(`${BASE_URL}/fashion?q=${searchValue}`, getProductParam)
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
    .get(`${BASE_URL}/home?q=${searchValue}`, getProductParam)
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
    .get(`${BASE_URL}/toys?q=${searchValue}`, getProductParam)
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
      .get(`${BASE_URL}/jewellary?q=${searchValue}`, getProductParam)
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
    .get(`${BASE_URL}/sports?q=${searchValue}`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => {
      dispatch({ type: types.PRODUCT_ERROR, payload: e });
    });
};
