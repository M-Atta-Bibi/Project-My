import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
  width: 100%;
  height: 100%;
  .Co1 {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    padding: 40px 0;
    .CoProduct {
      .CoLink {
        margin-top: 8px;
        a {
          font-size: 14px;
          text-decoration: none;
          color: var(--btn-green);
          &:hover {
            color: var(--btn-green-hover);
          }
        }
      }
    }
    .CoOrder {
    }
  }
  .Co2 {
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
`;
