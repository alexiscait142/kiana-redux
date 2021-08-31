import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {action} from './redux/action'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state?.data)

  return (
    <div className="App">
      <button onClick={() => dispatch(action)}>click to dispatch action</button>
      <button onClick={() => console.log(data[0].data)}>click to get data from state via selector (after dispatch)</button>
      {/* line 13 just logs the data from state to the console, no real use */}
      <p>{data && data[0].data}</p>
      {/* line 15 makes sure the data exists first before rendering on page */}
    </div>
  );
}

export default App;
