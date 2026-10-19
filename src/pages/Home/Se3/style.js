import styled from "styled-components";

export const Co1 = styled.div`
  background-color: var(--white-color);
`;
export const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  .CoIn {
    display: grid;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    span {
      margin: 0 auto;
      width: 48px;
      height: 48px;
      background-color: var(--background-perfect);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: var(--btn-green);
        font-size: 20px;
      }
    }
    h3 {
      font-size: 16px;
      color: var(--gray-text-800);
    }
    p {
      font-size: 14px;
      color: var(--gray-text);
    }
  }
`;
