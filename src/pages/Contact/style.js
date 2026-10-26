import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
  min-height: ${(props) => (props.success ? "" : "760px")};
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
    #Message {
      padding: 10px 12px;
      min-height: 110px;
      max-height: 450px;
      overflow: hidden auto;
      resize: vertical;
    }
  }
  .SuccessMessage {
    padding: 64px 24px;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 40px 32px;
      background-color: var(--white-color);
      border: 1px solid var(--white-color);
      border-radius: 12px;
      box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.5);
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 16px;
        width: 64px;
        height: 64px;
        border: 1px solid transparent;
        border-radius: 50%;
        color: green;
        background-color: var(--background-perfect);
      }
      h2 {
        margin-bottom: 8px;
        font-size: 32px;
        color: var(--gray-text-900);
      }
      p {
        margin-bottom: 16px;
        font-size: 16px;
        color: var(--gray-text-900);
      }
    }
  }
`;
