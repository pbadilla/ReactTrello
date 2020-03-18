import styled from 'styled-components';

export const AppBase = styled.div`
  align-items: center;
  color: #f8f9fa;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: #0079BF;
  border-color: #0079BF;
  flex: 1 0 auto;
  height: 45rem;
  margin: 0 auto;
  padding: 0.25rem;
  width: 100%;
`;

export const Danger = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    color: red;
  }
`;
