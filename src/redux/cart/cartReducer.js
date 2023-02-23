import * as types from "./cartTypes"

let initialState={
    isLoading:false,
    isError:false,
    product:[],
  
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.LOADING_API:
            return{
                ...state,
                isLoading:true
            }
        case types.ERROR_API:
            return{
                ...state,
                isError:true
            }
        case types.SUCCESS_API:
            return{
                ...state,
                product:[...state.product,payload]

            }
        default:
            return state;
    }

}
export {reducer}
