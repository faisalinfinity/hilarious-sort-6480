import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { BASE_URL } from "../constants/apiConstants"
import { Blue } from "../constants/theme"



function AdminOrder(){
   const [data,setData]=useState([])

   const getData=()=>{
    axios.get(`${BASE_URL}/users`)
   .then((res)=>{
      setData(res.data)
   })
   .catch((err)=>{
    console.log(err)
   })

  }

useEffect(()=>{
  getData()
},[])

console.log("data",data)
    return(
        <div>
            {data?.map((el)=>(
                <div key={el.id} style={{padding:"20px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
                    <Text fontSize={'22px'} fontWeight={'bold'} padding={'20px'}> User : {el.email}</Text>
                    <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={'30px'}  padding={'10px'}>
                    {el.order?.map((val)=>(
                        <div key={val.id} style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", padding:"30px",backgroundColor:Blue, color:"white",fontWeight:"bold"}} >
                            <img style={{width:"250px",height:"200px"}} src={val.image} alt="order" />
                            <h1 style={{fontSize:"18px", fontWeight:"bold"}}>{val.title}</h1>
                            <Flex justifyContent={"space-between"} alignItems={'center'}>
                                <h1>category: {val.category}</h1>
                                <h1>date : {val.date}</h1>
                            </Flex>
                            <Flex justifyContent={"space-between"} alignItems={'center'}>
                               <h1>price: {val.price}</h1>
                                <h1>quantity : {val.quantity}</h1>
                            </Flex>
                            <Flex justifyContent={"space-between"} alignItems={'center'}>
                               <h1>rating: {val.rating}</h1>
                                <h1>reviews : {val.reviews}</h1>
                            </Flex>
                            <h1>orderID: {val.orderId}</h1>
                            <h1>Status: {val.status}</h1>
                            <hr />
                            <Flex justifyContent={"space-between"} alignItems={'center'} p={"10px"} gap={'5px'}>
                                <Button variant={'solid'} colorScheme={'orange'}>Pending</Button>
                                <Button variant={'solid'} colorScheme={'green'}>Success</Button>
                                <Button variant={'solid'} colorScheme={'red'}>Reject</Button>
                            </Flex>

                        </div>
                    ))}
                    </Grid>
                </div>
            ))}
        </div>
    )
}
export default AdminOrder