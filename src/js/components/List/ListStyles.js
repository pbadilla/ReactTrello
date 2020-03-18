import styled from 'styled-components';

import { CardBase } from '../Card/CardStyles';

import { ButtonSimple } from '../Common/Buttons';

export const ListBase = styled(CardBase)`
  max-height: 100%;
  font-size: 0.9rem;
  background-color: #e1e3e6;
  width: 15rem;
  color: #343a40 !important;
  margin-bottom: 1.5rem !important;
`;

export const ListTitle = styled(CardBase)`
  font-weight: bold;
`;

export const ListFooter = styled.div`
  padding: .5rem;
  &:hover {
    background-color:#c0c7d1;
    color: rgb(31, 46, 46) !important;
    text-decoration: underline;
  }
`;

export const ButtonDeleteList = styled(ButtonSimple)`
  border: none;
  font-size: .8rem;
`;

export const Input = styled.input`
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
