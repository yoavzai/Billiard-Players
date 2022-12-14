import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Playoff16Comp from "./playoff16";
import Playoff8Comp from "./playoff8";
import StandingsComp from "./standings";
import { loadTournamentData } from "./utils";

export default function TournamentComp() {
  const params = useParams();
  const dispatch = useDispatch();
  const currentTournament = useSelector((state) => state.currentTournament);
  const [isPlayoff8, setIsPlayoff8] = useState(false);
  const [isPlayoff16, setIsPlayoff16] = useState(false);
 

  useEffect(() => {
    // loadTournamentData(params.id, dispatch);
    loadTournamentData("tkZZc7JOXs0QjZVaEiLk", dispatch);
  }, []);


  function openPlayoff8() {
    setIsPlayoff16(false);
    setIsPlayoff8(true);
  }

  function openPlayoff16() {
    setIsPlayoff8(false);
    setIsPlayoff16(true);
  }

  function closePlayoff() {
    setIsPlayoff16(false);
    setIsPlayoff8(false);
  }

  return (
    <div>
      {Object.keys(currentTournament).length === 0 ? (
        <div className="loading_container">
          <h2>טוען...</h2>
        </div>
      ) : (
        <div className="tournament_container">
          {/* <div className="navigation_menu_container">
            <Link to="/">בית</Link>
          </div> */}
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
            {currentTournament.data.playoff8.length > 0 &&
              <div className="buttons_container">
                <button className="button" onClick={openPlayoff8}>
                  פלייאוף
                </button>
              </div>
            }
            {currentTournament.data.playoff16.length > 0 &&
              <div className="buttons_container">
                <button className="button" onClick={openPlayoff16}>
                  פלייאוף
                </button>
              </div>
            }
          </div>
          {isPlayoff8 && (
            <div>
              <Playoff8Comp closePlayoff={closePlayoff}></Playoff8Comp>
            </div>
          )}
          {isPlayoff16 && (
            <div>
              <Playoff16Comp closePlayoff={closePlayoff}></Playoff16Comp>
            </div>
          )}
          <div className="turnament_dashboard">
            <StandingsComp></StandingsComp>
          </div>
        </div>
      )}
    </div>
  );
}
