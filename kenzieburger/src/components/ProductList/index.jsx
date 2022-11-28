import React from "react";
import ProductCard from "./ProductCard";
import { UlContent } from "./styles";

function ProductList({ itens, cartItens, setCartItens, addCartList }) {
  return (
    <UlContent>
      {itens.map((iten) => {
        return (
          <ProductCard
            key={iten.id}
            iten={iten}
            cartItens={cartItens}
            setCartItens={setCartItens}
            addCartList={addCartList}
          />
        );
      })}
    </UlContent>
  );
}

export default ProductList;
