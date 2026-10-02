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
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 12px;
  box-sizing: border-box;
`;
export const ImgBox = styled.div`
  background-color: ${({ color }) => color || "#1e3aba"};
  height: 90px;
  width: 90px;
  display: flex;
  min-width: 90px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Badge = styled.span`
  top: 12px;
  left: 12px;
  background-color: #b5ffb4;
  color: #027b00;
  font-size: 13px, bold;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 0;
`;
export const Price = styled.div`
  color: #10df0c;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  .form-check-input {
    display: none !important;
  }
  .form-check-label svg {
    width: 28px;
    height: 28px;
    stroke-width: 1;
  }
  .CoP {
    display: flex;
    p {
      font-size: 12px;
      color: #9ca3af;
    }
  }
`;
export const Content = styled.div`
  padding-block-end: 20px;
  padding-inline-start: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Title = styled.h3`
  color: #111827;
  margin-top: 1px;
  margin-bottom: 0;
  font-size: 18px;
`;
export const Category = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin-top: 1px;
`;
export const Description = styled.p`
  font-size: 16px;
  color: #525867;
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
  color: #6b7280;
  font-size: 14px;
`;
export const RiviewsCount = styled.span`
  font-size: 14px;
  color: #9ca3af;
`;
export const Action = styled.div`
  display: flex;
  gap: 8px;
`;
export const Details = styled.button`
  height: 35px;
  width: 100px;
  border: 1px solid #10df0c;
  border-radius: 8px;
  background-color: var(--white-color);
  color: #10df0c;
  padding: 2px;
  cursor: pointer;
`;
export const Add = styled.button`
  height: 35px;
  width: 100px;
  border: 2px;
  border-radius: 8px;
  background-color: #10df0c;
  color: var(--white-color);
  padding: 2px;
  cursor: pointer;
  &:hover {
    background-color: #079504;
  }
`;
