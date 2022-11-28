import styled from "styled-components";

export const UlContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 700px) {
    max-height: 346px;
    overflow-x: auto;
    margin-bottom: 32px;
  }
`;
