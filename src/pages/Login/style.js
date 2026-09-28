import styled from "styled-components";
{
  /*-----------------------القسم النصناني تبع تعبئة الحقول----------------- */
}
export const Main = styled.main`
  background: var(--main-gradient);
  min-height: 760px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 20px;
  .Text-Back {
    color: #b0b0b0;
    margin: 20px 0;
    font-size: 16px;
    &:hover {
      color: var(--white-color);
    }
  }
`;
{
  /*----------------------------القسم الابيض----------------------- */
}
export const Card = styled.div`
  width: 448px;
  background-color: var(--white-color);
  padding: 40px 32px;
  border-radius: 12px;
  border-top: 5px solid var(--btn-green);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  .form-control {
    background-color: var(--white-color);
  }
  .form-check {
    display: flex;
    margin: 20px 0;
    background-color: var(--white-color);
  }
  .h2-Text {
    color: var(--black-color);
    text-align: center;
    margin-bottom: 10px;
  }
  .Join-text {
    font-size: 14px;
    color: var(--gray-text);
    text-align: center;
    margin-bottom: 32px;
  }
  .Or-text {
    font-size: 13px;
    color: var(--gray-text);
    text-align: center;
    margin-bottom: 10px;
  }
  .SubmitB {
    background-color: var(--btn-green);
    color: var(--white-color);
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    height: 44px;
    font-weight: 600;
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
    &:hover {
      background-color: var(--btn-green-hover);
    }
  }
  .CSB {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .S {
      background-color: var(--white-color);
      color: var(--black-color);
      padding: 0px 12px;
      border: 1px solid #d8d8d8;
      border-radius: 7px;
      height: 40px;
      width: 100%;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      &:hover {
        background-color: #f9fafb;
      }
    }
  }
  .T-already {
    color: var(--gray-text);
    text-align: center;
    font-size: 14px;
    a {
      font-size: 16px;
      font-weight: 600;
      color: var(--btn-green);
      text-decoration: none;
      &:hover {
        color: var(--btn-green-hover);
      }
    }
  }
`;
