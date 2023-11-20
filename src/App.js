import React, { useEffect } from 'react'
import './App.css';
import Nav from './components/Nav';
import Dash_Board from './components/Dash_Board'
import { useDispatch } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';

const App = () => {
  const dispatch = useDispatch();
  // const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <div style={{ paddingTop: "10px" }} >
      <Nav />
      <hr style={{ marginTop: "10px" }} />
      <Dash_Board />
    </div>
  )
}

export default App