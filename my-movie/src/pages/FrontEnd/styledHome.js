import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323031;
  text-align:center;
  display:block;
`;

export const Logo = styled.img`
  height: 30.5em;
  width: 30.5em;
  margin: auto;
  margin-top: 8.2em;
`;

export const DivSearchBar = styled.div`
  height:4em;
  width: 60.3em;
  border-radius: 5em;
  background-color: #f7f7ff;
  margin: auto;
  margin-top: 1.6em;
  display:flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  height: 3rem;
  width: 80%;
  margin-left: 1rem;
  
  &:focus{
    box-shadow: 0;
    outline: 0;
  }
`;