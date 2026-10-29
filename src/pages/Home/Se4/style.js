import styled from "styled-components";

export const ContainerPage = styled.div`
  background-color: var(--secondary-color);
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
    color: var(--color-gray-200);
  }
  p {
    font-size: 14px;
    margin-bottom: 32px;
    color: var(--color-gray-400);
  }
  .ContainerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .BuCFA {
      font-size: 14px;
      color: var(--white-color);
      background-color: var(--main-color);
      border: 1px solid var(--main-color);
      border-radius: 12px;
      width: 192px;
      padding: 12px 28px;
      cursor: pointer;
      transition: background-color 0.5s ease;
      &:hover {
        background-color: var(--main-color-hover);
      }
    }
    .BuSi {
      font-size: 14px;
      color: var(--color-gray-200);
      background-color: transparent;
      border: 1px solid var(--color-gray-200);
      border-radius: 12px;
      width: 50%;
      padding: 12px 28px;
      width: 109px;
      cursor: pointer;
      transition: border 0.5s ease;
      &:hover {
        border: 1px solid var(--color-gray-100);
      }
    }
  }
`;
