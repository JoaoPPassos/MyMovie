import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323031;
  overflow-x: hidden;
  display: block;
`;

export const InfoArea = styled.div`
  height:100%;
  width: 100%;
  background-color :#5B595A;
  margin-left: auto;
  margin-right: auto;
`;

export const DivInfoArea = styled.div`
  height:auto;
  width:100%;
  margin-top: ${props => props.marginTop ?? 'auto'};
  display: ${props => props.display ?? 'block'};
  justify-items:center;

  .infoMovie{
    height: 60em;
    width: 130em;
  }

  .infoSinopse{
    height: 30em;
    width: 58em;
    margin: 0;
    margin-left: 30px;
  }

  .infoFotos{
    height: 30em;
    width: 58em;
    margin: 0; 
    margin-right: 30px;
  }

  .infoElenco{
    height: 40em;
    width: 130em;
  }
`;
