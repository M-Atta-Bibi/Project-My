import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--secondary-color);
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
  a {
    text-decoration: none;
    color: var(--white-color);
    cursor: default;
    h2 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    color: var(--main-color);
  }
  .BuLogOut {
    cursor: pointer;
    background: var(--main-gradient);
    border: 1px solid var(--main-color);
    padding: 6px 16px;
    color: var(--main-color);
    &:hover {
      background: var(--main-color);
      color: var(--white-color);
    }
  }
  a {
    color: var(--color-gray-200);
    text-decoration: none;
    font-size: 12px;
    &:hover {
      color: var(--color-gray-100);
    }
    &:focus {
      color: var(--main-color);
    }
    &.active {
      color: var(--main-color);
    }
    border: 1px solid transparent;
    border-radius: 4px;
    &[border="true"] {
      border: 1px solid var(--main-color);
      padding: 6px 16px;
      color: var(--main-color);
      &:hover {
        background-color: var(--main-color);
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
  gap: 8px;
  .CoLng {
    color: var(--color-gray-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 36px;
    height: 36px;
    position: relative;
    border-radius: 50%;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    .DL {
      background-color: transparent;
      border: none;
      padding: 6px 16px;
      color: var(--main-color);
      cursor: pointer;
    }
    ul {
      list-style: none;
    }
    li {
      position: absolute;
      font-size: 20px;
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
    color: var(--color-gray-200);
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  .CoLi {
    display: flex;
    gap: 5px;
    .CoF {
      .Sf {
        position: absolute;
        top: 6px;
        inset-inline-end: 247px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white-color);
      }
      a {
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-gray-200);
        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
        &.active {
          background-color: var(--main-color);
        }
      }
    }
    .CoB {
      .Sb {
        position: absolute;
        top: 6px;
        inset-inline-end: 207px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white-color);
      }
      a {
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-gray-200);
        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
        &.active {
          background-color: var(--main-color);
        }
      }
    }
  }
`;
