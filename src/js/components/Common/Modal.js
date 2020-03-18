import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width:100%;
  z-index: 30;
  display: ${props => (props.show ? 'block' : 'none')};
`;


export const ModalBase = styled.div`
  height: 100%;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: opacity 0.15s linear;
  width: 100%;
  z-index: 1050;
  display: ${props => (props.show ? 'block' : 'none')};
`;


export const ModalDialog = styled.div`
  align-items: center;
  display: flex;
  margin: 0.5rem;
  margin: 1.75rem auto;
  max-width: 500px;
  min-height: calc(100% - 3.5rem);
  pointer-events: none;
  width: auto;
`;
