import React, { useState , useEffect} from "react";
import "./Payment.css";
import axios from './axios';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { Link,useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [ error, setError ] = useState(null);
  const [ disabled, setDisabled ] = useState(true);
  const [ clientSecret, setclientSecret ]= useState(true);

  function getTotalBasket() {
    let sum = 0;

    basket.forEach((item) => {
      sum += item.price;
    });
    return sum;
  }
  // 
  useEffect(async () => {
    const getClientSecret = async ()=>{
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5001/clone-2ff3e/us-central1/api/payments/create?total=' + (getTotalBasket()*1000),
      })
      setclientSecret(response.data.clientSecret);
    }

    getClientSecret();  
  },{basket});
  console.log('THE SECRET IS >>>>',clientSecret);

  console.log(user);

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(function(result) {
      console.log("RESULT");
      console.log(result);

      console.log(result.error.payment_intent.amount);
      console.log(result.error.payment_intent.created);
      console.log(result.error.payment_intent.id);
      console.log(user?.uid);
      const items = basket.map((obj)=> {return Object.assign({}, obj)});

      console.log(items);
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(result.error.payment_intent.id)
        .set({
          basket: items,
          amount: result.error.payment_intent.amount,
          created: result.error.payment_intent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:"EMPTY_BASKET"
        });

        history.replace('/orders');
    });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };



  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="./checkout">{basket.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Enter Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Address</p>
            <p>Address</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="paymet__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={index}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__pricecontainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getTotalBasket(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
