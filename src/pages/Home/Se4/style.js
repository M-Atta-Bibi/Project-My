import styled from "styled-components";

export const Co1 = styled.div`
  background-color: var(--header-color);
`;
export const Main = styled.div`
  padding: 64px 0;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--white-color);
  }
  p {
    font-size: 14px;
    margin-bottom: 32px;
    color: var(--gray-text);
  }
  .CoBu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .BuCFA {
      font-size: 14px;
      color: var(--white-color);
      background-color: var(--btn-green);
      border: 1px solid var(--btn-green);
      border-radius: 12px;
      width: 192px;
      padding: 12px 28px;
      &:hover {
        background-color: var(--btn-green-hover);
      }
    }
    .BuSi {
      font-size: 14px;
      color: var(--white-color);
      background-color: transparent;
      border: 1px solid var(--gray-text-400);
      border-radius: 12px;
      width: 50%;
      padding: 12px 28px;
      width: 109px;
      &:hover {
        border: 1px solid var(--white-color);
      }
    }
  }
`;
