import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComp from './components/homepage';
import { init } from './components/utils';
import TournamentComp from './components/tournament';
import NoInternetComp from './components/noInternet';
import Playoff16Comp from './components/playoff16';
import TournamentsComp from './components/tournaments';

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
            <Route path='/' element={<TournamentsComp></TournamentsComp>}></Route>
            <Route path='/tournament/:id/playoff' element={<Playoff16Comp></Playoff16Comp>}></Route>
            <Route path='/tournament/:id' element={<TournamentComp></TournamentComp>}></Route>
          </Routes>
      </NoInternetComp>
    </div>
  );
}

export default App;
