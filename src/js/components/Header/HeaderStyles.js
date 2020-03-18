import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FourColumns } from '../Common/CommonStyles';


export const HeaderBase = styled.div`
  background-color: #0067A3;
  border-color: #0067A3;
  padding: 0.25rem !important;
  width: 100%;
`;

export const Content = styled.div`
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Columns = styled(FourColumns)`
  padding-left: 0;
  padding-right: 0;
`;

export const Title = styled(FourColumns)`
a {
  color: white;
  text-decoration: none;
  svg {
    margin-left: .5rem;
  }
} 
`;

export const HomeIcon = styled.a`
  font-size: 1.15rem;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.25rem !important;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  color: white;
`;
