import {useDispatch,useSelector} from 'react-redux';
import {COUNT} from '../../Store/type/types';
import {getValue} from '../Services/getValue';
import {Background,Logo,SearchBar} from './styledHome';

export default function Home(){
  const contador = useSelector(getValue);
  const dispatch = useDispatch();  
  require('typeface-montserrat');
  
  return(
    <Background>
      <div style={{display:'block',justifyItems:'center'}}>
        <Logo src='./Imagem 1.png' alt='logo'/>
      </div>
      <SearchBar>

      </SearchBar>
    </Background>
  );
};

