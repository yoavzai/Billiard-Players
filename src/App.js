import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComp from './components/homepage';
import { init } from './components/utils';
import TournamentComp from './components/tournament';
import NoInternetComp from './components/noInternet';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadData() {
      await init(dispatch)
    }
    loadData()
  },[])

  return (
    <div className="App">
      <NoInternetComp>
          <Routes>
            <Route path='/' element={<TournamentComp></TournamentComp>}></Route>
            {/* <Route path='/tournament/:id' element={<TournamentComp></TournamentComp>}></Route> */}
          </Routes>
      </NoInternetComp>
    </div>
  );
}

export default App;
