import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--backgroud-pr);
`;
export const FilterBar = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-gray-200);
  .ContainerBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 35px;
    .Controls-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
      select {
        background-color: var(--white-color);
        color: var(--color-gray-400);
        font-size: 12px;
        border: 1px solid var(--color-gray-200);
        border-radius: 12px;
        outline: none;
        padding: 8px 12px;
        &:focus {
          border: 1px solid var(--main-color);
        }
      }
      .Filter-section {
        display: flex;
        overflow: hidden;
        border-radius: 12px;
        border: 1px solid var(--color-gray-200);
      }
    }
  }
`;

export const FilterProduct = styled.div`
  display: flex;
  gap: 10px;
`;
export const ProductsSeaction = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  padding: 40px 24px;
  .ContainerPage {
    padding: 0 35px;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
    margin: 0;
    width: 100%;
  }
`;
export const ResultHeader = styled.p`
  color: var(--color-gray-400);
  font-size: 12px;
  margin-bottom: 20px;
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

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "var(--main-color)" : "var(--white-color)"};
  color: ${(props) =>
    props.active ? "var(--white-color)" : "var(--color-gray-400)"};
  border: ${(props) =>
    props.border && !props.active ? "1px solid var(--color-gray-200)" : "none"};
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
      props.border && !props.active ? "1px solid var(--main-color)" : ""};
    color: ${(props) =>
      props.border && !props.active ? "var(--main-color)" : ""};
  }
  &:focus {
    background-color: ${(props) => (props.active ? "var(--main-color)" : "")};
  }
`;
