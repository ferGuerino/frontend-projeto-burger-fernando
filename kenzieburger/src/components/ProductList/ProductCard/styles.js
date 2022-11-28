import styled from "styled-components";

export const LiCard = styled.li`
  width: 300px;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--gray-20);
  background-color: var(--gray-0);
  border-radius: var(--border-radius-2);

  img {
    width: 60%;
    height: 150px;
    object-fit: cover;
  }
  .cardInfo {
    width: 100%;
    height: 100%;
    padding: 24px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);
  }
  .category {
    font-size: var(--font-size-6);
    color: var(--gray-50);
  }
  .price {
    font-size: var(--font-size-4);
    color: var(--color-primary);
    font-weight: var(--font-semibold);
  }
  button {
    height: 40px;
    padding: 0 20px;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-2);
    color: var(--white);
    font-weight: var(--font-semibold);
    font-size: var(--font-size-5);
  }
`;
