import { Link } from "react-router-dom";
import styled from "styled-components";
export const LinkDetails = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  background: var(--white-color);
  border-radius: 12px;
  border: 1px solid var(--color-gray-200);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${({ showBuy }) => (showBuy ? "121px" : "100%")};
  margin-bottom: ${({ showBuy }) => (showBuy ? "16px" : "0")};
  align-items: flex-start;
  padding: 12px;
  box-sizing: border-box;
`;
export const ImgBox = styled.div`
  background-color: ${({ color }) => color || "#1e3aba"};
  height: 90px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  border-radius: 12px;
  position: relative;
  .form-check-input {
    display: none !important;
  }
  .form-check-label svg {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 12px;
    height: 12px;
    stroke-width: 1;
    cursor: pointer;
  }
  span {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 2px;
    left: 66px;
  }
`;
export const HeaderRow = styled.div`
  ${({ showBuy }) =>
    showBuy
      ? ""
      : " display: flex; align-items: center; justify-content: space-between;"};
`;

export const Badge = styled.span`
  top: 12px;
  left: 12px;
  background-color: var(--main-color);
  color: var(--white-color);
  font-size: 13px, bold;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 0;
`;
export const Price = styled.div`
  color: var(--main-color);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  .CoR {
    display: flex;
    align-items: center;
    justify-content: center;
    #minus {
      background-color: var(--white-color);
      width: 37px;
      height: 37px;
      border: 1px solid var(--color-gray-200);
      border-radius: 0;
      border-end-start-radius: 12px;
      border-start-start-radius: 12px;
      cursor: pointer;
    }
    #plus {
      background-color: var(--white-color);
      width: 37px;
      height: 37px;
      border: 1px solid var(--color-gray-200);
      border-radius: 0;
      border-start-end-radius: 12px;
      border-end-end-radius: 12px;
      cursor: pointer;
    }
    #reslute {
      background-color: var(--white-color);
      width: 37px;
      height: 37px;
      border: 1px solid var(--color-gray-200);
      border-right: none;
      border-left: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .CoP {
    display: flex;
    p {
      font-size: 12px;
      color: var(--gray-text-600);
    }
  }
`;
export const Content = styled.div`
  padding-inline-start: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ showBuy }) => (showBuy ? "30px" : "0")};
  .CoDelete {
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 16px;
      color: var(--color-gray-400);
      &:hover {
        color: red;
      }
    }
  }
`;
export const Title = styled.h3`
  color: var(--dark-color);
  margin-top: 1px;
  margin-bottom: 0;
  font-size: 18px;
`;
export const Category = styled.p`
  color: var(--gray-text-600);
  font-size: 14px;
  margin-top: 1px;
`;
export const Description = styled.p`
  font-size: 16px;
  color: var(--color-gray-400);
  margin-top: 2px;
  //    اظهار سطرين و متابعة ......
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;
export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: var(--color-gray-400);
  font-size: 14px;
`;

export const Action = styled.div`
  display: flex;
  gap: 8px;
`;
export const Details = styled.button`
  height: 35px;
  width: 100px;
  border: 1px solid var(--main-color);
  border-radius: 8px;
  background-color: var(--white-color);
  color: var(--main-color);
  padding: 2px;
  cursor: pointer;
`;
export const Add = styled.button`
  height: 35px;
  width: 100px;
  border: 2px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: var(--white-color);
  padding: 2px;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color-hover);
  }
`;
