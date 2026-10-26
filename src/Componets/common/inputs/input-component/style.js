import styled from "styled-components";
export const InputStyles = styled.div`
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    position: relative;

    .form-label {
      font-size: 14px;
      color: #111010;
    }
    .form-control {
      width: 100%;
      height: 42px;
      padding: 0px 12px;
      border: 1px solid #d8d8d8;
      border-radius: 7px;
      outline: none;
      box-sizing: border-box;
      margin: 8px 0;
    }
    .form-control:focus {
      border-color: #00c875;
      box-shadow: 0 0 0 3px rgba(175, 255, 222, 0.5);
    }
    .form-control.is-invalid {
      border-color: #b42318;
      box-shadow: 0 0 0 3px rgba(255, 175, 175, 0.5);
    }
  }

  .field-error {
    color: #b42318;
  }
  p {
    font-size: 12px;
    white-space: nowrap;
    color: #b42318;
  }
  button {
    position: absolute;
    inset-inline-end: 15px;
    top: 39px;
    background-color: transparent;
    color: var(--gray-text-400);
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
  }
`;
