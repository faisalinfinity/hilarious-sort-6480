import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import style from "../Style/Cart.module.css"
import Footer from "../components/Footer"

const Cartpage = () => {
  const {user}=useSelector((store)=>store.auth)
  console.log(user[0].email)

  const handleAddtoCart=()=>{
    let obj={
      user:user[0].email,
      product:{},
      quantity:0
    }
  }
  return (
    <>
    <div className={style.cart}>
      <h1 className={style.cartHeading}>Shopping Cart</h1>
      <div className={style.cartChild}>
        <div className={style.cartChildfirst}>
          <div style={{width:"25%"}}>
          <img className={style.cartChildfirstImage} src="https://i.ebayimg.com/thumbs/images/g/ioIAAOSw~OZjfs4o/s-l500.jpg" alt="cart" />
          </div>
          <div style={{width:"25%",fontSize:"16px",fontWeight:"bold", textAlign:"left"}}>
            <h1>Tempered Glass Screen Protector For Samsung Galaxy Tab A7 Lite T225 T220 8.7</h1>
            <br />
            <p>New with tags</p>
          </div>
          <div style={{width:"25%",fontSize:"16px",fontWeight:"bold"}}>
            <h1>Qty 1</h1>
            <br />
            <p>Economy</p>
            <p>International</p>
            <p>Shipping</p>
          </div>
          <div style={{width:"25%",fontSize:"16px",fontWeight:"bold"}}>
            <h1>Request total</h1>
            <hr />
            <h1>US $47.88</h1>
            <p>+ US $14.99</p>
            <br />
            <Button bg={'red.600'} color={"white"}>Delete</Button>
          </div>
        </div>
        <div className={style.cartChildsecond}>
          <button className={style.cartChildsecondbutton}>Go to checkout</button>
          <br />
          <br />
          <Flex justifyContent={"space-between"} >
            <h3>Item</h3>
            <h3>US $47.88</h3>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <h3>Shipping Charge</h3>
            <h3>US $14.99</h3>
          </Flex>
          <br />
          <hr />
          <br />
          <Flex justifyContent={"space-between"}>
            <h1>Subtotal</h1>
            <h1>US $62.87</h1>
          </Flex>
        </div>
      </div>
      <br />
      <br />
    </div>
    <Footer/>
    </>
  )
}

export default Cartpage