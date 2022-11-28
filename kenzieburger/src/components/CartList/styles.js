import styled from "styled-components";

export const DivCart = styled.div`
  height: 65px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;
  font-size: var(--font-size-3);

  p {
    font-size: var(--font-size-3);
    font-weight: var(--font-semibold);
    color: var(--white);
  }
`;

export const UlContent = styled.ul`
  background-color: var(--gray-0);
`;
