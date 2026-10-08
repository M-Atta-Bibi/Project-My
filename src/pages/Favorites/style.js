import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
  width: 100%;
  height: 100%;
  padding: 40px 24px;
  .NoLenght {
    padding: 80px 16px;
    text-align: center;
    svg {
      color: #d1d5db;
      font-size: 64px;
      margin-bottom: 16px;
    }
    p {
      color: var(--gray-text-400);
      font-size: 20px;
      margin-bottom: 24px;
    }
    button {
      width: 180px;
      height: 100%;
      color: var(--white-color);
      font-size: 14px;
      background-color: var(--btn-green);
      border: 1px solid #16a34a;
      border-radius: 12px;
      padding: 12px 32px;

      &:hover {
        background-color: var(--btn-green-hover);
      }
    }
  }
  .Lenght {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;
