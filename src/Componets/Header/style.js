import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--header-color);
  color: white;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
`;
export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const Logo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    color: var(--btn-green);
  }
  button {
    cursor: pointer;
    background: var(--main-gradient);
    border: 1px solid #22c55e;
    padding: 6px 16px;
    color: #22c55e;
    &:hover {
      background: #22c55e;
      color: var(--white-color);
    }
  }
  a {
    color: var(--nav-link-color);
    text-decoration: none;
    font-size: 12px;
    &:hover {
      color: var(--nav-link-color-hover);
    }
    &:focus {
      color: #16a34a;
    }
    &.active {
      color: #16a34a;
    }
    border: 1px solid transparent;
    border-radius: 4px;
    &[border="true"] {
      border: 1px solid #22c55e;
      padding: 6px 16px;
      color: #22c55e;
      &:hover {
        background-color: #22c55e;
        color: var(--white-color);
      }
    }
  }
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #0c1827;
    padding: 20px;
    box-sizing: border-box;
  }
`;
export const MenuIcon = styled.div`
  display: none;
  font-size: 28px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const CoBut = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .CoLng {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    position: relative;
    border-radius: 50%;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    button {
      background-color: transparent;
      border: none;
      padding: 6px 16px;
      color: #22c55e;
      cursor: pointer;
    }
    ul {
      list-style: none;
    }
    li {
      position: absolute;
      top: 32px;
      right: 10px;
      &:hover {
        background-color: var(--background-perfect);
        border-radius: 10px;
      }
    }
  }
  .LDm {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    color: #22c55e;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;
