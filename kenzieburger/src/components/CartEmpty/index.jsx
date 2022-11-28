import React from "react";
import { DivEmpty } from "./style";

function CartEmpty() {
  return (
    <DivEmpty>
      <h3>Sua sacola está vazia</h3>
      <p>Adicione Itens</p>
    </DivEmpty>
  );
}

export default CartEmpty;
