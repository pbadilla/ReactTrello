import styled from 'styled-components';
import { ButtonBase } from '../Common/Buttons';
import { AutoColumn } from '../Common/CommonStyles';


export const Title = styled.h2`
  font-size: 1em;
  font-weight: bold;
  vertical-align: middle;
  color: #172b4d;
`;

export const Input = styled.input`
  background-clip: padding-box;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;

  &:focus {
    color: white;
    background-color: rgba(255,255,255,0.3);
  }
  &::placeholder {
    color: white;
  }
`;

export const TitleSection = styled.div`
  align-items: center;
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  svg {
    color: black;
    margin-right: .25rem;
  }
`;

export const Container = styled.div`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 auto;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;
`;


export const BoardDisplayBase = styled.div`
  align-items: center;
  background-color: #0067A3;
  border-radius: 4px;
  height: 6rem;
  margin-right: .25rem;
  /**medaiqueries */
  width: 200px;
`;

export const BoardDisplayCreate = styled(BoardDisplayBase)`
  width: 400px;
`;


export const BoardDisplayContainer = styled.div`
  width: $board-display-container-width;
  margin-bottom: 3rem;
  margin-left: 0;
  margin-right: 0;
  flex-direction: column;
  display: flex;
`;

export const BoardCreateBase = styled.div`
  align-items: center;
  /**medaiqueries */
  width: 100%;
  height: 4rem;
`;

export const BoardColumn = styled(AutoColumn)`
  align-self: center;
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
`;

export const BoardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const BoardDisplayLink = styled.a` 
  align-items: center;
  align-self: center;
  color: white;
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &:hover .star-white {
    opacity: 1;
  }
`;

export const BoardDisplayTitle = styled.p`
  font-size: 1rem;
  vertical-align: text-top;
  text-align: left;
  height: 100%;
  overflow: hidden;
`;

export const BoardDisplayStar = styled(ButtonBase)`
  font-size: 0.8rem;
  transition: font-size 0.2s;
  &:hover {
    font-size: 1.25rem;
  }
`;

export const BoardBase = styled.div`
  padding: .25rem;
  height: 100%;
  width: 100%;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

export const BoardMenu = styled.div`
  margin: 0 0 .5rem 0;
  align-items: center;
  align-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

export const BoardHeaderTitle = styled.h3` 
  max-width: 88%;
  color: white;
  flex: 0 0 88%;
  font-size: 1.4rem;
  margin-bottom: 0;
`;

export const BoardDeleteButton = styled(ButtonBase)`
align-self: flex-end;
`;

export const BoardHeaderIcon = styled.svg`
  font-size: $board-header-icon-font-size;
  color: white;

  &:hover {
    color: white;
  }
`;

export const BoardContendScroll = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
`;

export const ButtonCreate = styled(ButtonBase)`
    background-color: white;
    border: 2px solid #17a2b8;
    color: #17a2b8;
    font-family: 'Roboto Condensed', sans-serif;
    :hover{
      background-color: #17a2b8;
      color: white;
    } 
`;

export const BoardCreateWrapper = styled.div`
  display: block;
  input {
    border: 1px solid #172b4d;
    color: #172b4d;
    font-family: 'Roboto Condensed';
    font-size: 1rem;
    margin-bottom: .5rem;
    padding: .5rem;
    width: 52%;

  }
`;

export const BoardButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  > button {
    margin-right: .5rem;
  }
`;
