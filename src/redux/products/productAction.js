
import axios from "axios";
import * as types from "./productsType"
export const getDataElectronic=()=>(dispatch)=>{
     dispatch({type:types.PRODUCT_LOADING});
     axios.get('http://localhost:8080/electronic')
     .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
     .catch((e)=>{
       dispatch({type:types.PRODUCT_ERROR,payload:e})
     })
    }
    export const getDataFashion=()=>(dispatch)=>{
      dispatch({type:types.PRODUCT_LOADING});
      axios.get('http://localhost:8080/fashion')
      .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
      .catch((e)=>{
        dispatch({type:types.PRODUCT_ERROR,payload:e})
      })
     }
     export const getDataHome=()=>(dispatch)=>{
      dispatch({type:types.PRODUCT_LOADING});
      axios.get('http://localhost:8080/home')
      .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
      .catch((e)=>{
        dispatch({type:types.PRODUCT_ERROR,payload:e})
      })
     }
     export const getDataToys=()=>(dispatch)=>{
      dispatch({type:types.PRODUCT_LOADING});
     axios.get('http://localhost:8080/toys')
      .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
      .catch((e)=>{
        dispatch({type:types.PRODUCT_ERROR,payload:e})
      })
     }
     export const getDataJewellary=()=>(dispatch)=>{
      dispatch({type:types.PRODUCT_LOADING});
      axios.get('http://localhost:8080/jewellary')
      .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
      .catch((e)=>{
        dispatch({type:types.PRODUCT_ERROR,payload:e})
      })
     }
     export const getDataSports=()=>(dispatch)=>{
      dispatch({type:types.PRODUCT_LOADING});
      axios.get('http://localhost:8080/sports')
      .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
      .catch((e)=>{
        dispatch({type:types.PRODUCT_ERROR,payload:e})
      })
     }


