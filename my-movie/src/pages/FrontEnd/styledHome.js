import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323031;
  text-align:center;
  display:block
`;

export const Logo = styled.img`
  height: 30.5em;
  width: 30.5em;
  margin: auto;
  margin-top: 10.2em;
`;

export const SearchBar = styled.input`
  height:2.7em;
  width: 40.3em;
  border-radius: 5em;
  background-color: #f7f7ff;
  margin: auto;
  margin-top: 1.6em;

  &:focus{
    box-shadow: 0;
    outline: 0;
  }
`;