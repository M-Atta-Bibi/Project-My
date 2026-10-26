import styled from "styled-components";
export const ContainerText = styled.div`
  background: var(--main-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 204px;
  h1 {
    color: var(--white-color);
    margin-bottom: 12px;
    font-size: 36px;
  }
  p {
    font-size: 14px;
    margin: 0 auto;
    color: var(--white-color);
    max-width: 530px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  padding: 40px 24px;
  .pad {
    padding: 0 35px;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
    margin: 0;
    width: 100%;
  }
`;
export const DisplayMode = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.ViewMode === "grid" ? "repeat(3,1fr)" : "1fr"};
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const ContainerButton = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  .mar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 35px;
    .ContainerButtonView {
      display: flex;
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid var(--gray-text-400);
    }
    .rightS {
      display: flex;
      align-items: center;
      gap: 15px;
      select {
        background-color: var(--white-color);
        color: var(--gray-text-500);
        font-size: 12px;
        border: 1px solid #d0dae0;
        border-radius: 12px;
        outline: none;
        padding: 8px 12px;
        &:focus {
          border: 1px solid var(--btn-green);
        }
      }
    }
  }
`;
export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "var(--btn-green)" : "var(--white-color)"};
  color: ${(props) => (props.active ? "var(--white-color)" : "#596770")};
  border: ${(props) =>
    props.border && !props.active ? "1px solid #aebec7" : "none"};
  border-radius: ${(props) => (props.border ? "12px" : "none")};
  font-size: 12px;
  font-weight: 600;
  padding: ${(props) => (props.border ? "6px 16px" : "8px 12px")};
  width: auto;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      !props.active && !props.border ? "var(--backgroud-pr)" : ""};
    border: ${(props) =>
      props.border && !props.active ? "1px solid var(--btn-green)" : ""};
    color: ${(props) =>
      props.border && !props.active ? "var(--btn-green)" : ""};
  }
  &:focus {
    background-color: ${(props) => (props.active ? "var(--btn-green)" : "")};
  }
`;
export const ContainerButtonFilter = styled.div`
  display: flex;
  gap: 10px;
`;
export const NumberArray = styled.p`
  color: #b2b9be;
  font-size: 12px;
  margin-bottom: 20px;
`;
export const ContainerAll = styled.div`
  background-color: var(--backgroud-pr);
`;
