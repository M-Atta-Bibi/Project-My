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
      background-color: var(--white-color);
      border: 1px solid var(--white-color);
      border-radius: 12px;
      padding: 24px;
      h3 {
        font-size: 16px;
        color: var(--gray-text-800);
        margin-bottom: 20px;
      }
      .CoHe {
        .CoBo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          font-weight: bold;
          color: var(--gray-text-500);
          margin-bottom: 12px;
        }
        .CoTo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          color: var(--btn-green);
          margin-bottom: 12px;
          padding-top: 12px;
          border-top: 1px solid #dadee4;
          span {
            color: var(--gray-text-800);
            font-weight: bold;
          }
        }
        .CoButton {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 100%;
            background-color: var(--btn-green);
            color: var(--white-color);
            border: 1px solid var(--btn-green);
            border-radius: 12px;
            padding: 12px 24px;
            font-size: 14px;
            cursor: pointer;
            &:hover {
              background-color: var(--btn-green-hover);
            }
          }
        }
        p {
          color: var(--gray-text-400);
          font-size: 12px;
          margin: 12px 0;
          text-align: center;
        }
      }
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
