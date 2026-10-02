import styled from "styled-components";
export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  .CoLoc {
    background-color: var(--white-color);
  }
  .containerLocation {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    .H {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-text);
      @media (max-width: 768px) {
        padding: 20px 10px;
        width: 100%;
        margin: 0;
      }
    }
    .N {
      font-size: 12px;
      color: #555c69;
      @media (max-width: 768px) {
        padding: 20px 10px;
        width: 100%;
        margin: 0;
      }
    }
  }
`;
export const ContainerDetailsPage = styled.div`
  background-color: var(--backgroud-pr);
  padding: 48px 24px;
  #back {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
      padding: 20px 10px;
    }
  }
  .a {
    a {
      font-size: 14px;
      color: #555c69;
      text-decoration-line: none;
      font-weight: 600;
    }

    padding-bottom: 32px;
  }
  .R-Text {
    h3 {
      color: var(--black-color);
      font-size: 18px;
      margin: 48px 0 24px 0;
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ContainerDetails = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #d4d7e0;
  border-radius: 12px;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const ContainerGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
