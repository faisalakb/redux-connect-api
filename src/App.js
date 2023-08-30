import './App.css';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import {fetchTodos} from './redux/slice/userSlice';

function App() {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
  console.log(state);
  if(state.user.isLoading){
    
    return <h1>Loading ...</h1>
  }

  return (
    <div className="App">
     <button type="button" onClick={(e)=>dispatch(fetchTodos())}>Fetch Todo</button>
     {state.user.data.results && state.user.data.results.map(current =><li key={uuid()}>{current.gender}</li>)
    
     }
    
    </div>
  );
}

export default App;
