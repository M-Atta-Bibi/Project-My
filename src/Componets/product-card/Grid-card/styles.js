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
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImgBox = styled.div`
  background-color: ${({ color }) => color || "#1e3aba"};
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .form-check-input {
    display: none !important;
  }
  .form-check-label svg {
    position: absolute;
    top: 6px;
    right: 5px;
    width: 20px;
    height: 20px;
    stroke-width: 1;
    cursor: pointer;
  }
  .Heart {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 10px;
    left: 315px;
  }
`;
export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: var(--main-color);
  color: var(--white-color);
  font-size: 12px;
  padding: 4px;
  border-radius: 8px;
`;
export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Category = styled.p`
  margin-bottom: 4px;
  color: var(--gray-text-600);
  font-size: 12px;
`;
export const Title = styled.h3`
  color: var(--dark-color);
  font-size: 14px;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--color-gray-400);
  //    اظهار سطرين و متابعة ......
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;
export const RiviewsCount = styled.span`
  font-size: 12px;
  color: var(--color-gray-400);
`;
export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Price = styled.div`
  color: var(--main-color);
  font-size: 16px;
  span {
    font-size: 12px;
    color: var(--gray-text-600);
  }
`;
export const Action = styled.div`
  display: flex;
  gap: 8px;
`;
export const Details = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  background-color: var(--white-color);
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;

  justify-content: center;
  a {
    color: var(--color-gray-400);
    font-weight: 600;
    text-decoration: none;
  }
  &:hover {
    border: 1px solid var(--main-color);
    color: var(--main-color);
  }
`;
export const Add = styled.button`
  border: 2px solid var(--main-color);
  border-radius: 8px;
  background-color: var(--main-color);
  color: var(--white-color);
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color-hover);
    border: 2px solid var(--main-color-hover);
  }
`;
