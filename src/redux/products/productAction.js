import axios from "axios";
import * as types from "./productsType"
export const getData=()=>(dispatch)=>{
     dispatch({type:types.PRODUCT_LOADING});
     let res=axios.get('http://localhost:8080/data?q=iphone')
     .then((res)=>dispatch({type:types.PRODUCT_SUCCESS,payload:res.data}))
     .catch((e)=>{
       dispatch({type:types.PRODUCT_ERROR,payload:e})
     })
    }