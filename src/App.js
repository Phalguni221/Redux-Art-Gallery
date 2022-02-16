import './App.css';
import {useSelector, useDispatch, connect } from 'react-redux'
import { setAPIData, incrementId, decrementId, clearId, resetId, fetchData } from './features/dataSlice'
import {useEffect} from 'react';

function App (props) {
  const Dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const renderImg = () => {
    if(data.setAPIData) {
      return <img style={{'width': '100vw'}} src={data.setAPIData.primaryImage} alt={data.setAPIData.title} />
    } else {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    Dispatch(fetchData())
  }, [props.objectId, Dispatch])
  
  return (
    <div className="App">
    <div>
      <button onClick={() => Dispatch(fetchData())}>Thunk!</button>
      <button onClick={() => Dispatch(setAPIData())}>setAPI</button>
      <button onClick={() => Dispatch(incrementId())}>Increment</button>
      <button onClick={() => Dispatch(decrementId())}>Decrement</button>
      <button onClick={() => Dispatch(clearId())}>Clear</button>
      <button onClick={() => Dispatch(resetId())}>Reset</button>
    </div>
    <input value={ data.objectId } onChange={(e) => {
      Dispatch(resetId(Number(e.target.value)))
    }} />
    <div>
      {data.objectId}
      {renderImg()}
    </div>
  </div>
  );
  }

  const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId })

export default connect(mapStateToProps)(App)
