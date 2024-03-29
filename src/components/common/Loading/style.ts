import styled from "styled-components";

export const Load = styled.article`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border: 8px solid #e9ebee;
  border-top: 8px solid #00b8ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  } ;
`;
