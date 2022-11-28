import React from "react";
import CartEmpty from "../CartEmpty";
import { DivTotalCart } from "./styles";

function CartTotal({ cartItens, setCartItens }) {
  const mapTotal = cartItens.map((value) => {
    return value.price;
  });
  const sumTotal = mapTotal.reduce((acc, iv) => {
    return acc + iv;
  }, 0);
  return (
    <div>
      {sumTotal === 0 ? (
        <CartEmpty />
      ) : (
        <DivTotalCart>
          <div className="totalInfo">
            <p className="cartTotal">Total</p>
            <p className="cartTotalValue">R$ {sumTotal.toFixed(2)}</p>
          </div>
          <button onClick={() => setCartItens([])}>Remover Todos</button>
        </DivTotalCart>
      )}
    </div>
  );
}

export default CartTotal;
