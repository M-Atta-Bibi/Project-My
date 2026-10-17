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
  .swiper-button-prev,
  .swiper-button-next {
    width: 36px !important;
    height: 36px !important;
    border: 1px solid #a1b1c6 !important;
    border-radius: 50% !important;
    background-color: white !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #a1b1c6 !important;
  }

  /* إزالة رمز Swiper الأصلي */
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "" !important;
    display: none !important;
  }

  /* السهم الصغير */
  .swiper-button-prev::before {
    content: "‹" !important;
    font-size: 26px !important;
    color: #a1b1c6 !important;
    line-height: 1 !important;
  }

  .swiper-button-next::before {
    content: "›" !important;
    font-size: 26px !important;
    color: #a1b1c6 !important;
    line-height: 1 !important;
  }

  /* مكان الأسهم */
  .swiper-button-prev {
    left: -12px !important;
  }

  .swiper-button-next {
    right: -12px !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer !important;
    pointer-events: auto !important;
    z-index: 20 !important;
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
    width: 45px;
    height: 12px;
    border-radius: 20px;
    background: var(--btn-green);
  }
`;
