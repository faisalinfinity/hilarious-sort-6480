import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Container,
  Flex,
  Grid,
  VStack,
} from "@chakra-ui/react";
import style from "../Style/SingleProduct.module.css";
import { FcApproval } from "react-icons/fc";
import { FaHotjar } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/apiConstants";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Carousel from "../components/singleProductCarousel";
import WithSubnavigation from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartError,
  cartLoading,
  cartQuantity,
  cartSuccess,
  getCart,
  removeCart,
} from "../redux/cart/cartAction";

//singleProduct page
function SingleProduct() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [forcedUpdate, setForcedUpdate] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const { user, isLoggedIn } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);
  const uid = user[0]?.uid;

  function Star(rating) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </Box>
    );
  }

  const handleClick = (el) => {
    if (isLoggedIn) {
      dispatch(addToCart(el, cart, uid, toast));
    } else {
      navigate("/login");
    }
    setForcedUpdate(!forcedUpdate);
  };

  useEffect(() => {
    if (uid) {
      dispatch(getCart(uid));
    }
  }, []);

  const handleGetData = () => {
    axios
      .get(`${BASE_URL}${location.pathname}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleQuantityMinus = (el) => {
    if (uid) {
      setCount((prev) => {
        if (count === 0) {
          dispatch(removeCart(el.id, cart, uid));
          setForcedUpdate(!forcedUpdate);
          toast({
            title: "Item Removed from Cart",
            description: "",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }

        return prev - 1;
      });

      dispatch(cartQuantity(-1, cart, el, uid));
    } else {
      navigate("/login");
    }
  };
  const handleQuantityPlus = (el) => {
    if (uid) {
      setCount((prev) => prev + 1);
      dispatch(cartQuantity(1, cart, el, uid));
    } else {
      navigate("/login");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id, cart, uid,toast));

    setForcedUpdate(!forcedUpdate);
  };

  useEffect(() => {
    if (uid) {
      dispatch(getCart(uid));
    }
  }, [count]);

  useEffect(() => {
    let flag = false;
    let quantity = 0;
    cart?.map((el) => {
      if (el.id === data.id) {
        flag = true;
        quantity = el.quantity;
      }
      return el;
    });

    if (!flag) {
      setCount(0);
    } else {
      setCount(quantity);
    }
  }, [forcedUpdate, cart, data]);

  return (
    <div>
      {/* <WithSubnavigation/> */}
      <br />
      <div className={style.singleProduct}>
        <div>
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">SingleProduct</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className={style.SingleProductBox}>
          <div className={style.SingleProductBoxfirst}>
            <img src={data.image} alt="imagename" />
          </div>
          <div className={style.SingleProductBoxsecond}>
            {/* <div className={style.SingleProductBoxthirdDiv}>
                        <div style={{fontSize:"30px"}}><FcApproval/></div>
                        <div>
                           <h3 style={{fontWeight:"bold",fontSize:"30px"}}>eBay Refurbished</h3>
                        </div>
                    </div> */}
            <div>
              <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
                {data.title}
              </h1>
            </div>
            <br />
            <div className={style.starchild}>
              <div style={{ color: "#DD1E31" }}>
                <FaHotjar />
              </div>
              <div>
                <p style={{ color: "#DD1E31" }}>
                  {data.reviews} watched in the last 24 hours
                </p>
              </div>
              <Flex gap={2}>
                {Star(data.rating)}
              </Flex>
              <p>{data.rating} products ratings</p>
            </div>
            <hr />
            <div>
              <h3>Condition: Excellent - Refurbished</h3>
              <p>"Limited quantity available"</p>
              <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                Quantity:
              </h1>
              <Flex gap={2}>
                <Button
                  disabled={count === 0}
                  onClick={() => handleQuantityMinus(data)}
                >
                  -
                </Button>
                <Button disabled>{count}</Button>
                <Button
                  onClick={() => handleQuantityPlus(data)}
                  disabled={count === 5}
                >
                  +
                </Button>
              </Flex>
              <br />
              <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                Price: <span> ₹ {data.price*80}</span>
              </h1>
              <br />
              <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                Subtotal: <span> ₹ {(+data.price * count*80).toFixed(2)}</span>
              </h1>
              <hr />
            </div>
            <hr />
            <br />
            <VStack></VStack>
            <Button
              disabled={true}
              onClick={() => handleClick(data)}
              bg={"green.700"}
              color={"white"}
            >
              Add to Cart
            </Button>
            <br />
            <br />

            {isLoggedIn && (
              <Button
              isDisabled={count===0}
                bg={"red.600"}
                color={"white"}
                onClick={() => handleRemove(data.id)}
              >
                Remove From Cart
              </Button>
            )}

            <br />
            <hr />
            <br />
            <div>
              <div className={style.freeShipping}>
                <h2 style={{ color: "#DD1E31", fontWeight: "bold" }}>
                  Free shipping and returns
                </h2>
                <h2 style={{ fontWeight: "bold" }}>{data.reviews} watchers</h2>
                <h2 style={{ fontWeight: "bold" }}>28 sold</h2>
              </div>
            </div>
            <br />
            <div>
              <h1>
                <span style={{ fontWeight: "bold" }}>Shipping: </span>
                FREE Expedited Shipping{" "}
              </h1>
              <p>
                <span style={{ fontWeight: "bold" }}>Located in: </span>{" "}
                Addison, Texas, United States
              </p>
              <h1>
                <span style={{ fontWeight: "bold" }}>Delivery: </span>Estimated
                between Fri, Feb 24 and Mon, Feb 27 to default
              </h1>
              <h1>
                <span style={{ fontWeight: "bold" }}>Returns: </span>60 day
                returns | Seller pays for return shipping
              </h1>
              <h1>
                <span style={{ fontWeight: "bold" }}>Payments: </span>PayPal,
                GPay, Visa
              </h1>
            </div>
            <br />
            <hr />
          </div>
          <div className={style.SingleProductBoxthird}>
            <h2 style={{ fontWeight: "bold" }}>Shop with confidence</h2>
            <div className={style.SingleProductBoxthirdDiv}>
              <div style={{ fontSize: "40px" }}>
                <FcApproval />
              </div>
              <div>
                <h3 style={{ fontWeight: "bold" }}>Productify Refurbished</h3>
                <p>
                  All items are tested by qualified refurbishers and function as
                  intended.
                </p>
                
              </div>
            </div>
            <hr />
            <div className={style.SingleProductBoxthirdDiv}>
              <div style={{ fontSize: "40px" }}>
                <FcApproval />
              </div>
              <div>
                <h3 style={{ fontWeight: "bold" }}>
                  One-year warranty included
                </h3>
                <p>
                  Protected with fast repairs or replacements. U.S residents
                  only. Your email is shared with Allstate for a frictionless
                  experience.
                </p>
                
              </div>
            </div>
            <hr />
            <div className={style.SingleProductBoxthirdDiv}>
              <div style={{ fontSize: "40px" }}>
                <FcApproval />
              </div>
              <div>
                <h3 style={{ fontWeight: "bold" }}>
                  Productify Money Back Guarantee
                </h3>
                <p>Get the item you ordered or get your money back.</p>
               
              </div>
            </div>
            <hr />
            <h2 style={{ fontWeight: "bold" }}>Seller information</h2>
            <h3>amazing-wireless (127162)</h3>
            <p>99.9% Positive feedback</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SingleProduct;
