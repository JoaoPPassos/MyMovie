import styled from 'styled-components';
import Icon from '../../components/Icon';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323031;
  overflow-x: hidden;
  display: block;

  .info2{
    justify-content: space-evenly;
    display: flex;
  }
`;

export const InfoArea = styled.div`
  height:100%;
  width: 100%;
  background-color :#5B595A;
  
`;

export const SectionInfoArea = styled.section`
  height:auto;
  width:100%;
  margin-top: ${props => props.marginTop ?? 'auto'};
  display: ${props => props.display ?? 'block'};
  
  .infoMovie{
    height: 60em;
    width: 128em;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;

    .poster{
      align-self: center;
    }
  }

  .infoSinopse{
    height: 30em;
    width: 60em;
    margin: 0;
    margin-left: 24px;
  }

  .infoFotos{
    height: 30em;
    width: 60em;
    margin: 0; 
    margin-right: 24px;
  }

  .infoElenco{
    height: 40em;
    width: 130em;
    margin-left: auto;
    margin-right: auto;
  }
`;


export const SvgPoster = styled(Icon)`
  height: 56em;
  width: 48em;
  margin-left: 32px;
`;

export const ImagePoster = styled.image`
  height: 56em;
  width: 48em;
`;

export const TrailerArea = styled.imager`
  height: 32em;
  width: 56em;
`;