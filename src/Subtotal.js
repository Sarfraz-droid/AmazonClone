import React, { Component } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  function getTotalBasket() {
    let sum = 0;

    basket.forEach((item) => {
      sum += item.price;
    });
    return sum;
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length}
              items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getTotalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push('/payment')}> Proceed to checkout </button>
    </div>
  );
}
{
  /* <div className="subtotal">
<CurrencyFormat
  renderText={(value) => {
    <>
      <p>
        Subtotal({basket.length} items):
        <strong>{" ${value}"}</strong>
      </p>

      <small>
          <input type='checkbox' />   
          This order contains a gift
      </small>
    </>;
  }}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
/>
</div> */
}

export default Subtotal;
