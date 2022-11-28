import styled from "styled-components";

export const FormSearch = styled.form`
  width: 365px;
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--gray-20);
  background-color: var(--white);
  padding: 10px;
  border-radius: var(--border-radius-2);
  input {
    border: none;
    font-size: var(--font-size-4);
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: var(--gray-20);
  }
  button {
    height: 40px;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-2);
    padding: 0 20px;
    color: var(--white);
    font-size: var(--font-size-5);
    font-weight: var(--font-semibold);
  }
`;
