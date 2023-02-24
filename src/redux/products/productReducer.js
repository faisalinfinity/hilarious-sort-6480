import * as types from "./productsType"
let initialState={
    loading:false,
    errormsg:"",
    error:false,
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case types.PRODUCT_LOADING:{
            return{
                loading:true

            }
        }
        case types.PRODUCT_SUCCESS:{
            return{
                loading:false,
                products:payload

            }
        }
        case types.PRODUCT_ERROR:{
            return{
                loading:false,
                error:true,
                errormsg:payload

            }
        }
        default:return state
    }
}