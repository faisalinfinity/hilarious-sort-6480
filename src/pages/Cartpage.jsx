import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Style/Cart.module.css";
import Footer from "../components/Footer";
import { getCart, removeCart } from "../redux/cart/cartAction";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const { user } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);
  const [total,setTotal]=useState(0)
  const email = user[0].email;
  const uid = user[0].uid;
  const dispatch = useDispatch();
  const toast=useToast()
  const [forcedUpdate, setForcedUpdate] = useState(false);
  const navigate=useNavigate()
  const handleRemove = (id) => {
    dispatch(removeCart(id, cart, uid));
    toast({
      title: "Item Removed from Cart",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setForcedUpdate(!forcedUpdate);
  };


  useEffect(() => {
    if(uid){
      dispatch(getCart(uid));
    }
   
  }, [uid]);

  useEffect(()=>{
   let sum=0
   cart.forEach((el)=>{
    sum+=el.price
   })
   sum=(sum*80).toFixed(2)
   setTotal(sum)
  },[cart])
  

  return (
    <>
      <div className={style.cart}>
        <h1 className={style.cartHeading}>Shopping Cart</h1>
        
        <div className={style.cartChild}>
         {cart?.length===0 && <Heading>Cart is Empty</Heading>}
          { 
            cart?.map((el) => {
              return (
                <div className={style.cartChildfirst}>
                  <div >
                    <img
                      className={style.cartChildfirstImage}
                      src={el.image}
                      alt="cart"
                    />
                  </div>
                  <div
                    // style={{
                    //   width: "25%",
                    //   fontSize: "16px",
                    //   fontWeight: "bold",
                    //   textAlign: "left",
                    // }}
                  >
                    <h1>
                      {el.title}
                    </h1>
                    <br />
                    <p>New with tags</p>
                  </div>
                  <div
                    // style={{
                    //   width: "25%",
                    //   fontSize: "16px",
                    //   fontWeight: "bold",
                    // }}
                  >
                    <h1>Quantity: {el.quantity}</h1>
                    <br />
                    <p>Economy</p>
                    <p>International</p>
                    <p>Shipping</p>
                  </div>
                  <div
                    // style={{
                    //   width: "25%",
                    //   fontSize: "16px",
                    //   fontWeight: "bold",
                    // }}
                  >
                    <h1>Request total</h1>
                    <hr />
                    <h1> ₹ {(el.price*80).toFixed(2)}</h1>
                    <p>+ ₹ {(14.99*80).toFixed(2)}</p>
                    <br />
                    <Button onClick={()=>handleRemove(el.id)}  colorScheme={"orange"}  varient="solid" bg={"red.600"} color={"white"}>
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
           
          <div className={style.cartChildsecond}>
           {cart?.length===0 ? <Heading>Cart is Empty</Heading>:<div>
            <button onClick={()=>navigate("/payment")} className={style.cartChildsecondbutton}>
              Go to checkout
            </button>
            <br />
            <br />
            <Flex justifyContent={"space-between"}>
              <h3>Item</h3>
              <h3>₹ {total}</h3>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <h3>Shipping Charge</h3>
              <h3>+ ₹ {(14.99*80).toFixed(2)}</h3>
            </Flex>
            <br />
            <hr />
            <br />
            <Flex justifyContent={"space-between"}>
              <h1>Subtotal</h1>
              <h1>₹{+total+(15*80)}</h1>
            </Flex>
            </div>}
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Cartpage;
