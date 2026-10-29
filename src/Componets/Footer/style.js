import styled from "styled-components";

{
  /*----------------------------FOOTER----------------------------- */
}
export const Container = styled.footer`
  background-color: var(--white-color);
  width: 100%;
  font-size: 12px;
`;
export const Main = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  @media (max-width: 768px) {
    padding: 0 24px 24px 24px;
  }
`;
export const UpperSection = styled.div`
  width: 100%;

  .ContainerColumns {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    .A {
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
    }
  }
  border-bottom: 1px solid var(--color-gray-200);
`;
export const ColumnContent = styled.div`
  flex: 1;
  p {
    color: var(--color-gray-400);
  }
  h5 {
    font-size: 12px;
    margin-bottom: 20px;
    color: var(--dark-color);
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 10px;
    a {
      color: var(--color-gray-400);
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover {
        color: var(--main-color-hover);
      }
    }
  }
`;
export const SubmitButton = styled.form`
  display: flex;
  align-items: center;
  margin-top: 16px;
  border-radius: 5px;
  .form-group {
    margin: 0 !important;
  }
  .form-control {
    border-radius: 0 !important;
    background-color: var(--white-color);
    box-shadow: none !important;
    margin: 0 !important;
    border-end-start-radius: 5px !important;
    border-start-start-radius: 5px !important;
  }
  button {
    width: 42px;
    height: 42px;
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 0;
    border-start-end-radius: 5px;
    border-end-end-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: var(--main-color-hover);
    }
  }
  &:focus-within {
    box-shadow: 0 0 20px rgba(175, 255, 222, 1);
  }
  & > div {
    flex: 1;
    min-width: 0;
  }
`;
export const SectionIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;
  p {
    color: var(--color-gray-400);
  }
  div {
    display: flex;
    gap: 20px;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 18px;
      color: var(--color-gray-400);
      cursor: pointer;
      &:hover {
        background-color: var(--main-color-hover);
        color: var(--white-color);
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
{
  /*---------------------------------------------------- */
}
