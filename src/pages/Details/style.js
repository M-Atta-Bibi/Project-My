import styled from "styled-components";
export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  .product-path-section {
    background-color: var(--white-color);
    .breadcrumb-nav {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      .breadcrumb-item {
        font-size: 16px;
        font-weight: 600;
        color: var(--color-gray-400);
        @media (max-width: 768px) {
          padding: 20px 10px;
          width: 100%;
          margin: 0;
        }
      }
      .breadcrumb-item-active {
        font-size: 12px;
        color: var(--dark-color);
        @media (max-width: 768px) {
          padding: 20px 10px;
          width: 100%;
          margin: 0;
        }
      }
    }
  }
`;
export const DetailsWrspper = styled.div`
  background-color: var(--backgroud-pr);
  padding: 48px 24px;
  .Container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
      padding: 20px 10px;
    }
  }
  .back-navigation {
    a {
      font-size: 14px;
      color: var(--color-gray-400);
      text-decoration-line: none;
      font-weight: 600;
    }
    padding-bottom: 32px;
  }
  .Related-title {
    h3 {
      color: var(--dark-color);
      font-size: 18px;
      margin: 48px 0 24px 0;
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const DetailsProduct = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  margin: 0 auto;
  background-color: var(--white-color);
`;
