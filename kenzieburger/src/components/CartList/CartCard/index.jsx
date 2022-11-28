import React from "react";
import { LiCartCard } from "./styles";

function CartCard({ iten, removeCartList }) {
  return (
    <LiCartCard>
      <div className="divImg">
        <img src={iten.img} alt="" />
      </div>
      <div className="divInfo">
        <div className="infoContent">
          <p className="cartName">{iten.name}</p>
          <p className="cartCategory">{iten.category}</p>
        </div>
        <button onClick={() => removeCartList(iten.id)}>Remover</button>
      </div>
    </LiCartCard>
  );
}

export default CartCard;
