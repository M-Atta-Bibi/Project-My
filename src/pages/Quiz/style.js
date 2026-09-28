import styled from "styled-components";

export const Introduction = styled.div`
  background: #1a365d;
  width: 100%;
  height: 335px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 45px 20px;
  h1 {
    font-size: 36px;
    font-size: 600;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    margin-bottom: 24px;
  }
  .badge-normal {
    background-color: rgba(255, 255, 255, 0.15);
    color: var(--white-color);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 14px;
  }
  .badge-perfect {
    background-color: #38a169;
    color: var(--white-color);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 12px;
  }
  .badge-pass {
    background-color: #f1b319;
    color: var(--white-color);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 12px;
  }
  .badge-fail {
    background-color: #e53e3e;
    color: var(--white-color);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 12px;
  }
`;
export const Main = styled.div`
  background-color: var(--white-color);
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
      color: var(--gray-text);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
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
      color: var(--gray-text);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
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
      color: var(--gray-text);
    }
    h3 {
      font-size: 24px;
      margin-bottom: 4px;
    }
  }
  .g {
    background-color: var(--btn-green);
    color: var(--white-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;
    &:hover {
      background-color: var(--btn-green-hover);
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
      color: #4b5563;
      border: 1px solid #b2b3b6;
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
        background-color: #f9fafb;
        color: var(--black-color);
        border: 1px solid #7c7d81;
      }
    }
  }
`;
