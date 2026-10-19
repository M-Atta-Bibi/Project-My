import styled from "styled-components";

export const C1 = styled.div`
  background-color: var(--backgroud-pr);
`;
export const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 0;
  .CoPL {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .SeL {
      display: grid;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-size: 12px;
        margin-bottom: 8px;
        color: var(--btn-green);
        font-weight: bold;
      }

      h2 {
        font-size: 30px;
        color: var(--gray-text-800);
        font-weight: bold;
      }
      p {
        font-size: 14px;
        color: var(--gray-text-400);
        margin-top: 8px;
      }
    }
    .SeR {
      display: flex;
      align-items: flex-end;
      a {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 20px;
        color: var(--btn-green);
        background-color: var(--white-color);
        font-size: 14px;
        border: 1px solid var(--btn-green);
        border-radius: 12px;
        text-decoration: none;
      }
    }
  }
  .CoProducts {
    position: relative;
  }
  //-------------------------------------------
  /* إخفاء السهم الافتراضي */
  .custom-prev,
  .custom-next {
    width: 36px !important;
    height: 36px !important;
    border: 1px solid #a1b1c6 !important;
    border-radius: 50% !important;
    background-color: white !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #a1b1c6 !important;
    z-index: 20;
    &:hover {
      color: var(--btn-green) !important;
      border: 1px solid var(--btn-green) !important;
    }
  }
  .custom-prev {
    position: absolute;
    top: 200px;
    left: -15px;
  }
  .custom-next {
    position: absolute;
    top: 200px;
    left: 1080px;
  }
  //-------------------------------------------
  .custom-prev.swiper-button-disabled,
  .custom-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  //-------------------------------------------
  .CoProducts .swiper-pagination {
    position: relative;
    margin-top: 25px;
  }
  .CoProducts .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #e2e8f0;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .CoProducts .swiper-pagination-bullet-active {
    width: 35px;
    height: 12px;
    border-radius: 20px;
    background: var(--btn-green);
  }
`;
