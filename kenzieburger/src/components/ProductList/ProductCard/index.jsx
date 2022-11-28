import React from "react";
import { LiCard } from "./styles";

function ProductCard({ iten, cartItens, setCartItens, addCartList }) {
  return (
    <LiCard>
      <img src={iten.img} alt="" />
      <div className="cardInfo">
        <h3>{iten.name}</h3>
        <p className="category">{iten.category}</p>
        <p className="price">R$ {iten.price.toFixed(2)}</p>
        <button onClick={() => addCartList(iten)}>Adicionar</button>
      </div>
    </LiCard>
  );
}

export default ProductCard;
