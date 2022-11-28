import styled from "styled-components";

export const LiCartCard = styled.li`
  display: flex;
  padding: 16px;

  .divImg {
    background-color: var(--gray-20);
    border-radius: var(--border-radius-2);
  }

  .divImg > img {
    width: 80px;
    height: 80px;
  }

  .divInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }

  .divInfo button {
    color: var(--gray-50);
  }

  .infoContent {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .cartCategory {
    font-size: var(--font-size-5);
    color: var(--gray-50);
  }
`;
