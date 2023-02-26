import {
    Input,
    Text,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Select
  } from '@chakra-ui/react'
import axios from 'axios';
  import {useState} from "react"
import { BASE_URL } from '../constants/apiConstants';
 



function AdminAddProduct(){
    const [addProduct, setAddProduct]=useState({
        title: "",
        category: "",
        image: "",
        branch:"",
        price: 0,
        rating: 0,
        reviews: 0,
    })
    

    const handleAddChange=(e)=>{
        const {name,value,type}=e.target ;
        const val=type=="number"? Number(value):value;

        setAddProduct({...addProduct, [name]:val})

    }

    const handleAddSubmit=(e)=>{
        e.preventDefault()
        console.log("addProduct",addProduct)
        axios.post(`${BASE_URL}/${addProduct.branch}`,{
            image:addProduct.image,
            title:addProduct.title,
            category:addProduct.category,
            branch:addProduct.branch,
            price:addProduct.price,
            rating:addProduct.rating,
            reviews:addProduct.reviews

        })
        .then((res)=>{
            console.log(res)
            alert("Product Added!")
        })
        .catch((err)=>{
            console.log(err)
        })
      
    }
    const {title,category,image,price,rating,reviews,branch}=addProduct

    return (
        <div>
            <div style={{width:"50%",textAlign:"center", margin:"auto" }}>
                <Heading style={{color:"#f2439d"}}>Add Products</Heading>
                <br />
                <form style={{border:"1px solid black", padding:"20px"}} onSubmit={handleAddSubmit}>
                    <FormLabel>Product Image</FormLabel>
                    <Input type='text' placeholder="image url" name="image" value={image} onChange={handleAddChange}/>
                    <br />
                    <FormLabel>Product Title</FormLabel>
                    <Input type='text' placeholder="title" name="title" value={title} onChange={handleAddChange} />
                    <br />
                    <FormLabel>Product Category</FormLabel>
                    <Input type='text' placeholder="category" name="category" value={category} onChange={handleAddChange} />
                    <br />
                    <br />
                    <FormLabel>Product Branch</FormLabel>
                    <Select name="branch" value={branch} onChange={handleAddChange}>
                        <option value="electronic">Electronic</option>
                        <option value="fashion">Fashion</option>
                        <option value="jewellary">Jewellary</option>
                        <option value="toys">Toys</option>
                        <option value="home">Home</option>
                        <option value="sports">Sports</option>
                    </Select>
                    <br />
                    <FormLabel>Product Price</FormLabel>
                    <Input type='number' placeholder="price" name="price" value={price} onChange={handleAddChange} />
                    <br />
                    <FormLabel>Product Rating</FormLabel>
                    <Input type='number' placeholder="rating" name="rating" value={rating} onChange={handleAddChange} />
                    <br />
                    <FormLabel>Product Reviews</FormLabel>
                    <Input type='number' placeholder="reviews" name="reviews" value={reviews} onChange={handleAddChange} />
                    <br />
                    <br />
                    <Input type='submit' value="Submit" />
                </form>
            </div>
            <br />
           
            
        </div>
        
        
    )

}
export default AdminAddProduct