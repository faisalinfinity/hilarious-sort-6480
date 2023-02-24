import * as types from "./cartTypes"

const cartLoading=()=>{
    return{
        type:types.LOADING_API
    }

}
const cartError=()=>{
    return{
        type:types.ERROR_API
    }
}
const cartSuccess=(payload)=>{
    return{
        type:types.SUCCESS_API,
        payload
    }
}



export {cartLoading,cartError,cartSuccess}