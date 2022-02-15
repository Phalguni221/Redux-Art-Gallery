import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch, connect } from 'react-redux'
import { setAPIData, incrementId, decrementId, enterId, resetId, fetchDataThunk } from './features/dataSlice'

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})
useEffect(() => {
  Dispatch(fetchData())
}, [props.objectId, dispatch])

const renderImg = () => {
  if(data.apiData) {
    return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
  } else {
    return <p>image here</p>
  }
}

  return (
    <div className="App">
    <div>
      <button onClick={() => Dispatch(fetchDataThunk())}>Thunk!</button>
      <button onClick={() => Dispatch(setAPIData())}>setAPI</button>
      <button onClick={() => Dispatch(incrementId())}>Next</button>
      <button onClick={() => Dispatch(decrementId())}>Back</button>
      <button onClick={() => Dispatch(enterId())}>Enter</button>
      <button onClick={() => Dispatch(resetId())}>Reset</button>
    </div>
    <input value={ data.objectId } onChange={(e) => {
      Dispatch(enterId(Number(e.target.value)))
    }} />
    <div>
      {data.objectId}
      {renderImg()}
    </div>
  </div>
  );


export default connect(mapStateToProps)(App)
