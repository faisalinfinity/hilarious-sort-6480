import axios from "axios"

export const getOrderApi=(uid)=>{
  return  axios.get(`http://localhost:8080/users/${uid}`)
    .then((res)=>res.data)
}

export const addOrderApi=(uid,payload)=>{
  return axios.patch(`http://localhost:8080/users/${uid}`,{order:payload})
  .then((res)=>res.data)
}