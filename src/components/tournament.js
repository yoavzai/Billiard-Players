import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Playoff16Comp from "./playoff16";
// import Playoff8Comp from "./playoff8";
import StandingsComp from "./standings";
import { loadTournamentData } from "./utils";

export default function TournamentComp() {
  const navigate = useNavigate()
  const params = useParams();
  const dispatch = useDispatch();
  const currentTournament = useSelector((state) => state.currentTournament);
  const [isPlayoff8, setIsPlayoff8] = useState(false);
  const [isPlayoff16, setIsPlayoff16] = useState(false);
 

  useEffect(() => {
    loadTournamentData(params.id, dispatch);
  }, []);


  function openPlayoff8() {
    setIsPlayoff16(false);
    setIsPlayoff8(true);
  }

  function openPlayoff16() {
    navigate("/tournament/" + params.id + "/playoff")
    // setIsPlayoff8(false);
    // setIsPlayoff16(true);
  }

  // function closePlayoff() {
  //   setIsPlayoff16(false);
  //   setIsPlayoff8(false);
  // }

  return (
    <div className="tournament_container">
      {Object.keys(currentTournament).length === 0 ? (
        <div className="loading_container">
          <h2>טוען...</h2>
        </div>
      ) : (
      <div>
        <div className="navigation_menu_container">
          <Link to="/" state={{ first: false }}>בית</Link>
        </div>
        <h2>
          <span>טורניר</span>
          <span>
            {" " +
              currentTournament?.data?.startDate.month +
              " " +
              currentTournament?.data?.startDate.year}
          </span>
          <span>
            {currentTournament?.data?.isActive ? " (פעיל)" : " (הסתיים)"}
          </span>
        </h2>
        <div className="turnament_top_buttons_box">
          {currentTournament.data.playoff8.length > 0 && !isPlayoff16 && !isPlayoff8 &&
          <button className="button playoff_button" onClick={openPlayoff8}>
            פלייאוף
          </button>
          }
          {currentTournament.data.playoff16.length > 0 && !isPlayoff16 && !isPlayoff8 &&
          <button className="button playoff_button" onClick={openPlayoff16}>
            פלייאוף
          </button>
          }
        </div>
        {/* {isPlayoff8 && (
          <Playoff8Comp closePlayoff={closePlayoff}></Playoff8Comp>
        )}
        {isPlayoff16 && (
          <Playoff16Comp closePlayoff={closePlayoff}></Playoff16Comp>
        )}
        {!isPlayoff16 && !isPlayoff8 && */}
        <div className="turnament_dashboard">
          <StandingsComp></StandingsComp>
        </div>
        {/* } */}
      </div>
      )}
    </div>
  );
}
