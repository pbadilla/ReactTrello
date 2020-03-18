import styled, { css } from 'styled-components';
// .scroll - parent {
//   width: 15rem;
//   height: 15rem;
//   border: 1px solid blue;
//   background-color: rgb(39, 201, 39);
// }


const scrollbar = css`
  &::-webkit-scrollbar {
    width: $scroll-width;
    height: $scroll-width;
  }

  &::-webkit-scrollbar-track {
    background-color: $transparent-black-20;
    border-radius: $scroll-radius;
  }

  &::-webkit-scrollbar-thumb { 
    border-radius: $scroll-radius;
    background-color: $transparent-white-40;
  }
`;

export const ScrollYBase = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  ${scrollbar};
`;

export const ScrollXBase = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  ${scrollbar};
`;
