import styled from "styled-components";

export const DivTotalCart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-0);
  border-top: 2px solid var(--gray-20);

  .totalInfo {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }
  .cartTotal {
    font-weight: var(--font-bold);
  }
  .cartTotalValue {
    font-weight: var(--font-semibold);
    color: var(--gray-100);
  }

  button {
    height: 60px;
    padding: 0 20px;
    background-color: var(--gray-20);
    margin: 16px;
    border-radius: var(--border-radius-2);
  }
`;
