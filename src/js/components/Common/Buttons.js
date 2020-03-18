import styled from 'styled-components';

export const ButtonBase = styled.button`
  background-color: #0067A3;
  border-color: #0067A3;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: #212529;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  :hover {
    background-color: white;
    border: 1px solid #9da1a4;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const ButtonSimple = styled(ButtonBase)`
  background-color: transparent;
  border-radius: 0.25rem;
  border: 1px solid #9da1a4;
  border-radius: 2px;
  font-size: .6rem;
  padding: 0.5rem;
`;

export const ListBase = styled.ul``;

export const ButtonSuccess = styled(ButtonBase)`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  :hover {
    background-color: white;
    color: #28a745; 
  }
`;

export const ButtonDelete = styled(ButtonBase)`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  :hover {
    background-color: white;
    color: #dc3545; 
  }
`;


export const ButtonsWrapper = styled.div`
  align-content: center;
  display: flex;
  justify-content: between;
  padding: .25rem;
`;