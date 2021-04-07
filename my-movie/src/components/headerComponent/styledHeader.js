import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  height: 13rem;
  width: 100%;
  background-color: #0A0708;
  display:flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height:100%;
  width:auto;
`;

export const LogoDiv = styled(Link)`
  height:6.4rem;
  width:auto;
  margin-left: 3.5em;
`;

export const SelectButton = styled.button`
  height: 2em;
  width: ${props => props.width};
  padding: 0 20px 0 20px;
  font-size: 18px;
  margin: 10px 20px 0 20px;
  border-radius: 5em;
  background-color: #006CBE;
  outline: 0;
  border: 0;
  cursor: pointer;

  transition: 0.3s;
  
  &:focus{
    background-color:#70CAFF;
  }
`;

export const ButtonsDiv = styled.div`
  height: 100%;
  width: 20em;
  display:flex;
  align-items: center;
  flex-direction:row;
  margin-left: 13.4em;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const DivSearchBar = styled.div`
  height:3.2em;
  width: 48em;
  border-radius: 5em;
  background-color: #f7f7ff;
  margin: auto;
  display:flex;
  flex-direction:row;
  align-items: center;
  margin-left: 50em;
`;

export const SearchBar = styled.div`
  height: 2.4rem;
  width: 80%;
  align-items: center;

  &:focus{
    box-shadow: 0;
    outline: 0;
  }
`;

export const SearchButton = styled(Link)`
  height: 100%;
  width: 8rem;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  background-color: #006CBE;
  font-size: 18px;
  cursor: pointer;
  outline: 0;
  border: 0;

  &:hover{
    background-color: #70CAFF;
  }

  &:active{
    background-color: #279AF1;
  }
`;