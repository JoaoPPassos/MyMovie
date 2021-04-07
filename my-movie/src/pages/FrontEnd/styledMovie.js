import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323031;
  text-align:center;
`;

export const InfoArea = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color :#5B595A;
`;