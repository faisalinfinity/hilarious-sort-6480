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
const cartSuccess=()=>{
    return{
        type:types.SUCCESS_API
    }
}



export {cartLoading,cartError,cartSuccess}