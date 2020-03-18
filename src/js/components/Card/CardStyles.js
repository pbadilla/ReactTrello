import styled from 'styled-components';

import { ButtonSuccess, ButtonSimple } from '../Common/Buttons';

export const CardBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const CardDisplay = styled.div`
  background-color: #f8f9fa;
  box-shadow: 0 1px 0 darkgray;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.5rem;

  &:hover {
    background-color: #ecf1f3;
    
    & .card-edit-button {
      opacity: 1;
    }
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardDescription = styled.div`
  flex: 0 0 88%;
  max-width: 88%;
`;

export const CardOptions = styled.div`
  flex: 0 0 9%;
  max-width: 9%;
`;

export const CardTitle = styled.div`
    margin-bottom: 0.75rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem;
    width: 100%;
    div {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      span{
        flex: 0 0 86%;
        max-width: 86%;
        font-size: 1rem;
        font-weight: bold;
        color: green;
        align-items: center;
        align-self: center;
        justify-content: center;
      } 
    }
`;

export const CardBody = styled.div`
    flex: 1 1 auto;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
`;

export const CardContainerBase = styled.div`
  padding-bottom: 0.5rem;
`;

export const CardFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto .5rem auto;
`;

export const CarFluidContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 .5rem -.85rem;
`;

export const CarFluidColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const ButtonEditSuccess = styled(ButtonSuccess)`
  margin-right: .25rem;
`;

export const ButtonEditCard = styled(ButtonSimple)`
`;

export const TextArea = styled.textarea`
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  color: #495057;
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  margin-bottom: 0.5rem !important;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
`;
