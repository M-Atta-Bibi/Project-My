import styled from "styled-components";

export const FAQHeader = styled.div`
  background: var(--main-gradient);
  width: 100%;
  height: 400px;
  color: var(--white-color);
  text-align: center;
  padding: 45px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 30px;
    font-size: 600;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
    max-width: 650px;
    margin: 15px auto 25px auto;
    line-height: 1.5;
  }

  .FAQButton {
    background-color: var(--btn-green);
    color: var(--white-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 30px;
    font-weight: bold;
    font-size: 15px;
    transition: background 0.2s;
    &:hover {
      background-color: var(--btn-green-hover);
    }
  }
`;
export const FAQSection = styled.div`
  background-color: var(--white-color);
  padding: 80px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-muted);
    max-width: 655px;
    margin-bottom: 60px;
    line-height: 1.6;
  }

  .accordion-container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    border: none;
  }
  .accordion-container-item {
    background-color: var(--white-color);
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    margin-bottom: 16px;
    overflow: hidden;
  }
  .accordion-container-item .accordion-button {
    background-color: var(--white-color);
    color: #333;
    font-weight: 500;
    font-size: 1rem;
    padding: 20px 24px;
    border: none;
    box-shadow: none;
    transition: all 0.2s ease;
  }

  .accordion-container-item .accordion-button:not(.collapsed) {
    background-color: var(--white-color);
    font-weight: 600;
  }
  .accordion-container-item .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-container-item .accordion-body {
    background-color: var(--white-color);
    color: var(--text-muted);
    font-size: 0.81rem;
    padding: 0 24px 24px 24px;
    line-height: 1.7;
    border-top: 1px solid #e2e8f0;
  }
  //للسهم
  .accordion-container-item .accordion-button::after {
    filter: grayscale(1) opacity(0.5);
    transition: transform 0.2s ease;
    margin-left: auto;
  }
  .FAQb {
    text-align: center;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pbtn {
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 6px;
  }
  Button {
    background-color: var(--btn-green);
    border: none;
    padding: 10px 28px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
    margin-top: 0px;
    & a {
      text-decoration: none;
      color: var(--white-color);
      font-weight: bold;
      font-size: 14px;
    }
  }
  Button:hover {
    background-color: var(--btn-green-hover);
  }
`;
