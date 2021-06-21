import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg"
        />
        <div>
          <h4>Hello, {user===null? 'Guest' : user.email}</h4>
          <h2 className="checkout__basket">Your Shopping Basket</h2>
          {basket.map((item,index) => (
            <CheckoutProduct 
              key={index}
              id = {index}
              title={item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2 className="checkout__title">The Subtotal would go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
