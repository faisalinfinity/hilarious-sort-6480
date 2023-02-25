import axios from "axios"
import { BASE_URL } from "../../constants/apiConstants"

export const addToCartApi=(id,payload)=>{
  return axios.patch(`${BASE_URL}/users/${id}`,{cart:payload})
}

export const getCartApi=(id)=>{
 return axios.get(`${BASE_URL}/users/${id}`)
 .then((res)=>res.data)
}