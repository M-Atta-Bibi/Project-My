import styled from "styled-components";
export const Hero = styled.div`
  background: var(--main-gradient);
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 56px 24px;
  h1 {
    color: var(--white-color);
    margin-bottom: 8px;
    font-size: 36px;
  }
  p {
    font-size: 14px;
    color: var(--white-color);
  }
  .children {
    margin-top: 25px;
    .badge-normal {
      background-color: rgba(255, 255, 255, 0.15);
      color: var(--white-color);
      padding: 8px 24px;
      border-radius: 20px;
      font-size: 14px;
    }
    .badge-perfect {
      background-color: #38a169;
      color: var(--white-color);
      padding: 8px 24px;
      border-radius: 20px;
      font-size: 12px;
    }
    .badge-pass {
      background-color: #f1b319;
      color: var(--white-color);
      padding: 8px 24px;
      border-radius: 20px;
      font-size: 12px;
    }
    .badge-fail {
      background-color: #e53e3e;
      color: var(--white-color);
      padding: 8px 24px;
      border-radius: 20px;
      font-size: 12px;
    }
  }
`;
