import styled from "styled-components";
export const Co1 = styled.div`
  background-color: var(--backgroud-pr);
`;
export const Container = styled.div`
  padding: 64px 0;
  max-width: 1100px;
  margin: 0 auto;
  .CoArticale {
    background-color: var(--white-color);
    border: 1px solid var(--gray-text);
    border-radius: 12px;
    width: 100%;
    height: 100%;
    padding: 24px;
    text-align: center;
    h2 {
      margin: 12px 0;
      font-size: 24px;
      color: var(--gray-text-800);
    }
    p {
      font-size: 14px;
      padding: 0 200px 40px;
      color: var(--gray-text-500);
    }
  }
`;
