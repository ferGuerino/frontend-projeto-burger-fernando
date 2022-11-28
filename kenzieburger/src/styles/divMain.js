import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  display: flex;
  .mainDiv {
    margin-top: 16px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }

  .itenList {
    width: 70%;
  }
  .cartList {
    width: 365px;
  }

  @media (max-width: 700px) {
    .mainDiv {
      flex-direction: column;
      align-items: center;
    }
  }
`;
