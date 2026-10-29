import styled from "styled-components";

export const ContainerCard = styled.div`
  background: var(--white-color);
  border: 1px solid var(--color-gray-200);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  h3 {
    font-size: 14px;
    color: var(--dark-color);
    margin-bottom: 16px;
    text-align: start;
  }
`;
export const ContainerQ = styled.label`
  display: flex;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 12px 16px;
  cursor: pointer;
  background-color: var(--white-color);
  color: var(--color-gray-500);
  label {
    font-size: 14px;
    margin-bottom: 8px;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 600;
  }
  input {
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin: 0 14px;
    accent-color: var(--main-color);
  }
  &:has(input:checked) {
    background-color: var(--background-perfect);
    border: 2px solid var(--main-color);
    color: var(--main-color);
    font-weight: bold;
  }
  &:hover {
    border: 0.5px solid #4ecf55;
    background-color: var(--backgroud-pr);
  }
  &.correct {
    background-color: var(--background-perfect);
    border: 2px solid #4ecf55;
    color: var(--main-color);
    input {
      accent-color: var(--main-color);
    }
  }
  &.wrong {
    background-color: var(--background-fail) !important;
    border: 2px solid #c94747 !important;
    color: #9b1c1c !important;
    input {
      accent-color: var(--gray-text-600);
    }
  }
`;
