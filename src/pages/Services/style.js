import styled from "styled-components";
export const Co1 = styled.div`
  background-color: var(--backgroud-pr);
`;
export const Container = styled.div`
  padding: 64px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  .CoArticale {
    background-color: var(--white-color);
    border: 1px solid var(--gray-text);
    border-radius: 12px;
    width: 100%;
    height: 100%;
    padding: 24px;
    h3 {
      margin: 12px 0;
      font-size: 16px;
      color: var(--gray-text-800);
    }
    p {
      margin: 0 0 16px 0;
      font-size: 14px;
      color: var(--gray-text-500);
    }
  }
`;
