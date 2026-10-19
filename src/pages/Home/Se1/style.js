import styled from "styled-components";
export const Co1 = styled.div`
  background: var(--main-gradient);
  min-height: 650px;
  display: flex;
  align-items: center;
`;
export const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  .SeLeft {
    display: flex;
    flex-direction: column;
    .badge {
      font-size: 12px;
      padding: 4px 12px;
      color: var(--text-green);
      background-color: rgba(34, 197, 94, 0.2);
      border: 1px solid var(--text-green);
      border-radius: 12px;
      width: 136px;
      margin-bottom: 20px;
    }
    h1 {
      max-width: 480px;
      font-size: 48px;
      color: var(--white-color);
      margin-bottom: 20px;
      span {
        color: var(--btn-green);
      }
    }
    p {
      font-size: 16px;
      font-weight: bold;
      color: var(--gray-text);
      margin-bottom: 32px;
      line-height: 28px;
    }
    .CoBu {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      .BuEP {
        display: flex;
        align-items: center;
        gap: 3px;
        font-size: 14px;
        color: var(--white-color);
        background-color: var(--btn-green);
        border: 1px solid var(--btn-green);
        border-radius: 12px;
        width: 186px;
        padding: 12px 28px;
        cursor: pointer;
        &:hover {
          background-color: var(--btn-green-hover);
        }
      }
      .BuTTQ {
        font-size: 14px;
        color: var(--white-color);
        background-color: transparent;
        border: 1px solid var(--gray-text-400);
        border-radius: 12px;
        width: 50%;
        padding: 12px 28px;
        width: 147px;
        cursor: pointer;
        &:hover {
          border: 1px solid var(--white-color);
        }
      }
    }
  }
  .SeRight {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    max-height: 200px;
    margin: auto 0;
    .Co4 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 24px;
      border: 1px solid var(--gray-text-400);
      border-radius: 12px;
      text-align: center;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      h3 {
        font-size: 30px;
        color: var(--text-green);
        margin-bottom: 4px;
      }
      p {
        font-size: 14px;
        color: var(--gray-text-400);
      }
    }
  }
`;
