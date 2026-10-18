import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
  min-height: 760px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 64px 20px;
  .CoInput {
    width: 448px;
    background-color: var(--white-color);
    padding: 40px 32px;
    border-radius: 12px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    .SubmitB {
      background-color: var(--btn-green);
      color: var(--white-color);
      border: none;
      border-radius: 8px;
      padding: 12px 0;
      height: 44px;
      font-weight: 600;
      width: 100%;
      margin: 20px 0;
      font-size: 14px;
      &:hover {
        background-color: var(--btn-green-hover);
      }
    }
  }
`;
