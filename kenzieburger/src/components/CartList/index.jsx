import React from "react";
import CartCard from "./CartCard";
import { UlContent, DivCart } from "./styles";

function CartList({ cartItens, setCartItens, removeCartList }) {
  return (
    <div>
      <DivCart>
        <p>Carrinho de Compras</p>
      </DivCart>
      <UlContent>
        {cartItens.map((iten) => {
          return (
            <CartCard
              key={iten.id}
              iten={iten}
              removeCartList={removeCartList}
            />
          );
        })}
      </UlContent>
    </div>
  );
}

export default CartList;
