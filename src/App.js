import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeComp from './components/homepage';
import { init } from './components/utils';
import TournamentComp from './components/tournament';
import NoInternetComp from './components/noInternet';
import Playoff16Comp from './components/playoff16';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadData() {
      const lastTourId = await init(dispatch)
      if (lastTourId != null) {
        navigate("/tournament/"+lastTourId)
      }
    }
    loadData()
  },[])

  return (
    <div className="App">
      <NoInternetComp>
          <Routes>
            <Route path='/' element={<HomeComp></HomeComp>}></Route>
            <Route path='/tournament/:id/playoff' element={<Playoff16Comp></Playoff16Comp>}></Route>
            <Route path='/tournament/:id' element={<TournamentComp></TournamentComp>}></Route>
          </Routes>
      </NoInternetComp>
    </div>
  );
}

export default App;
