import {useDispatch,useSelector} from 'react-redux';
import {COUNT} from '../../Store/type/types';
import {getValue} from '../Services/getValue';

export default function Home(){
  const contador = useSelector(getValue);
  const dispatch = useDispatch();
  console.log(contador);
  return(
    <div>
      <button onClick={() => dispatch({type:COUNT.INCREMENT})}>
        Increment
      </button>
      <button onClick={() => dispatch({type:COUNT.DECREMENT})}>
        Decrement
      </button>
      <h2>
        {contador.todo.value}
      </h2>
    </div>
  );
};

