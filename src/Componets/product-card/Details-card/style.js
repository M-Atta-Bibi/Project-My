import styled from "styled-components";
export const ContainerCart = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImgBox = styled.div`
  background-color: ${({ color }) => color || "#1e3aba"};
  border-end-start-radius: 12px;
  border-start-start-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 320px;
    border-radius: 12px 12px 0 0;
  }
`;
export const Badge = styled.span`
  background-color: #10df0c;
  color: var(--white-color);
  font-size: 12px;
  padding: 4px;
  border-radius: 8px;
`;
export const DataProduct = styled.div`
  border-start-end-radius: 12px;
  border-end-end-radius: 12px;
  padding: 32px;
  background-color: var(--white-color);
  #first {
    background-color: #f2f4fa;
    border: 1px solid #d4d7e0;
    border-radius: 15px;
    font-weight: 600;
    width: 73px;
    padding: 4px 12px;
    margin-bottom: 12px;
    color: var(--gray-text-400);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #second {
    color: var(--gray-text-400);
    font-size: 14px;
    margin-bottom: 16px;
  }
  #third {
    color: var(--gray-text-400);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .Cula {
    margin-bottom: 24px;
    #ula {
      list-style-type: none;
      padding: 0;
      li {
        color: var(--gray-text-400);
        font-size: 14px;
        font-weight: 475;
        margin-bottom: 8px;
      }
    }
  }

  #price {
    display: flex;
    color: var(--btn-green);
    font-weight: bold;
    font-size: 30px;
    align-items: center;
    margin-bottom: 16px;
    p {
      color: var(--gray-text-400);
      font-size: 14px;
      font-weight: 400;
    }
  }
  #Container-Qty {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }
  #Text-Qty {
    margin-inline-end: 12px;
  }
  #minus {
    background-color: var(--white-color);
    width: 37px;
    height: 37px;
    border: 1px solid #d4d7e0;
    border-radius: 0;
    border-end-start-radius: 12px;
    border-start-start-radius: 12px;
    cursor: pointer;
  }
  #plus {
    background-color: var(--white-color);
    width: 37px;
    height: 37px;
    border: 1px solid #d4d7e0;
    border-radius: 0;
    border-start-end-radius: 12px;
    border-end-end-radius: 12px;
    cursor: pointer;
  }

  #reslute {
    background-color: var(--white-color);
    width: 37px;
    height: 37px;
    border: 1px solid #d4d7e0;
    border-right: none;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #Container-Button {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 10px;
  }
  .form-check-input {
    display: none !important;
  }
  #ATC {
    background-color: var(--btn-green);
    font-weight: bold;
    color: var(--white-color);
    border: 1px solid #07d600;
    border-radius: 12px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    &:hover {
      background-color: var(--btn-green-hover);
    }
  }
  #BN {
    background-color: var(--white-color);
    color: #009600;
    font-weight: bold;
    border: 2px solid #009600;
    border-radius: 12px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    &:hover {
      background-color: #d5ffd5;
    }
  }
`;
export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) =>
    props.active ? "var(--background-fail)" : "var(--white-color)"};
  color: ${(props) => (props.active ? "red" : " var(--gray-text-400)")};
  border: ${(props) =>
    props.active ? "2px solid red;" : "2px solid var(--gray-text-400)"};
  border-radius: 12px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    color: red;
    border: 2px solid red;
  }
`;
