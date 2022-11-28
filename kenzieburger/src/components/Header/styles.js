import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--gray-0);

  .content {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }

  @media (max-width: 700px) {
    height: 140px;

    .content {
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
    }
    img {
      width: 150px;
      height: 64px;
    }
  }
`;
