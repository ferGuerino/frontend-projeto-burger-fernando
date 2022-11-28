import CartList from "./components/CartList";
import CartTotal from "./components/CartTotal";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { api } from "./services/api";
import { useState, useEffect } from "react";

import { Container } from "./styles/container";
import { DivMain } from "./styles/divMain";

function App() {
  const [itens, setItens] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getApiData() {
      try {
        setLoading(true);
        const request = await api.get("products");
        const response = request.data;
        setItens(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getApiData();
  }, []);

  function addCartList(iten) {
    if (cartItens.includes(iten) === false) {
      setCartItens([...cartItens, iten]);
    }
  }

  function removeCartList(cartItenId) {
    const newItensCart = cartItens.filter((iten) => {
      return iten.id !== cartItenId;
    });
    setCartItens(newItensCart);
  }

  return (
    <div>
      <Header itens={itens} setItens={setItens} />

      <DivMain>
        <Container>
          <div className="mainDiv">
            <section className="itenList">
              {loading ? (
                <h2>Carregando itens...</h2>
              ) : (
                <ProductList
                  itens={itens}
                  cartItens={cartItens}
                  setCartItens={setCartItens}
                  addCartList={addCartList}
                />
              )}
            </section>
            <section className="cartList">
              <CartList
                cartItens={cartItens}
                setCartItens={setCartItens}
                removeCartList={removeCartList}
              />
              {cartItens && (
                <CartTotal cartItens={cartItens} setCartItens={setCartItens} />
              )}
            </section>
          </div>
        </Container>
      </DivMain>
    </div>
  );
}

export default App;
