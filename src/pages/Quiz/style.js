import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
  padding: 64px 24px;
`;
export const ContainerQuestion = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 24px 16px;
  max-width: 800px;
  h2 {
    font-size: 24px;
    margin-bottom: 40px;
    color: var(--dark-color);
  }

  .perfectM {
    background-color: var(--background-perfect);
    border-radius: 12px;
    border: 1px solid #84e1bc;
    color: var(--black-color);
    text-align: center;
    padding: 25px;
    border-radius: 12px;
    p {
      font-size: 14px;
      color: var(--color-gray-400);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
      color: var(--dark-color);
    }
  }
  .passM {
    background-color: var(--background-pass);
    border-radius: 12px;
    border: 1px solid #e7c46e;
    color: var(--black-color);
    text-align: center;
    padding: 25px;
    border-radius: 12px;
    p {
      font-size: 14px;
      color: var(--color-gray-400);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
      color: var(--dark-color);
    }
  }
  .failM {
    background-color: var(--background-fail);
    border-radius: 12px;
    border: 1px solid #f8b4b4;
    color: var(--black-color);
    text-align: center;
    padding: 25px;
    border-radius: 12px;
    p {
      font-size: 14px;
      color: var(--color-gray-400);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
      color: var(--dark-color);
    }
  }
  .g {
    background-color: var(--main-color);
    color: var(--white-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;
    &:hover {
      background-color: var(--main-color-hover);
    }
  }
  .containerB {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
    .b {
      background-color: var(--white-color);
      color: var(--color-gray-400);
      border: 1px solid var(--color-gray-200);
      border-radius: 4px;
      cursor: pointer;
      padding: 12px 32px;
      font-size: 14px;
      transition: background 0.2s;
      a {
        color: inherit;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 600;
      }
      &:hover {
        color: var(--black-color);
        border: 1px solid var(--color-gray-300);
      }
    }
  }
`;
