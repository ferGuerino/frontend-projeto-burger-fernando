import React from "react";
import { Container } from "../../styles/container";
import image from "../../asets/logo.svg";
import Search from "../Search";
import { DivHeader } from "./styles";

function Header({ itens, setItens }) {
  return (
    <DivHeader>
      <Container>
        <div className="content">
          <img src={image} alt="" />
          <Search itens={itens} setItens={setItens} />
        </div>
      </Container>
    </DivHeader>
  );
}

export default Header;
