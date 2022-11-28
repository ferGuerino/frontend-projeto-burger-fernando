import React, { useState } from "react";
import { FormSearch } from "./styles";

function Search({ itens, setItens }) {
  const [search, setSearch] = useState("");

  function submit(event) {
    event.preventDefault();

    const filteredItens = itens.filter((iten) => {
      return (
        iten.name.toLowerCase().includes(search.toLowerCase()) ||
        iten.category.toLowerCase().includes(search.toLowerCase())
      );
    });

    setItens(filteredItens);
  }
  return (
    <FormSearch onSubmit={submit}>
      <input
        value={search}
        type="text"
        name=""
        id=""
        placeholder="Digitar Pesquisa..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </FormSearch>
  );
}

export default Search;
