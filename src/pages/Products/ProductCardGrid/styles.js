import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkDetails = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  background: var(--white-color);
  border-radius: 12px;
  border: 2px solid #e5e7eb;
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
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    stroke-width: 1;
  }
`;
export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: var(--btn-green);
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
  color: var(--gray-text-400);
  font-size: 12px;
`;
export const Title = styled.h3`
  color: var(--gray-text-900);
  font-size: 14px;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--gray-text-400);
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
  color: var(--gray-text-400);
`;
export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Price = styled.div`
  color: var(--btn-green);
  font-size: 16px;
  span {
    font-size: 12px;
    color: var(--gray-text-400);
  }
`;
export const Action = styled.div`
  display: flex;
  gap: 8px;
`;
export const Details = styled.div`
  border: 1px solid #7d7d7d;
  border-radius: 8px;
  background-color: var(--white-color);
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  a {
    color: var(--gray-text-400);
    font-weight: 600;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Add = styled.button`
  border: 2px;
  border-radius: 8px;
  background-color: var(--btn-green);
  color: var(--white-color);
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--btn-green-hover);
  }
`;
