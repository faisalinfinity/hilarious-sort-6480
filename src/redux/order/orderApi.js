import axios from "axios"
import { BASE_URL } from "../../constants/apiConstants"

export const getOrderApi=(uid)=>{
  return  axios.get(`${BASE_URL}/users/${uid}`)
    .then((res)=>res.data)
}

export const addOrderApi=(uid,payload)=>{
  return axios.patch(`${BASE_URL}/users/${uid}`,{order:payload})
  .then((res)=>res.data)
}