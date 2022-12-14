import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Playoff16GameComp from "./playoff16Game";
import { getPlayerByIdFromStore, loadTournamentData } from "./utils";

export default function Playoff16Comp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const currentTournament = useSelector((state) => state.currentTournament);
  const players = useSelector((state) => state.players);
  const [isWinners, setIsWinners] = useState(false)

  useEffect(() => {
    if (Object.keys(currentTournament).length === 0) {
      loadTournamentData(params.id, dispatch);
    }
    else {
      const p = document.getElementsByClassName("playoff16_container")[0]
      p.scrollIntoView({"inline": "center"})
    }
  }, [])

  return (
    <div className="playoff_wrapper">
      {(Object.keys(currentTournament).length === 0) ? 
      <div>
        <h2>טוען...</h2>
      </div>
      :
      <div className="container playoff16_container">
        <div className="buttons_container">
          <button
            className="button close_button"
            onClick={() => navigate("/tournament/" + params.id)}
          >
            סגור
          </button>
          <button className="button" onClick={() => setIsWinners(!isWinners)}>מנצחים</button>
        </div>
        <div className="playoff_bracket playoff16_bracket">
          {currentTournament?.data?.playoff16
            // .filter((g) => g.className !== "finals")
            .map((game, index) => {
              return (
                <Playoff16GameComp
                  key={index}
                  game={game}
                  index={index}
                ></Playoff16GameComp>
              );
            })}
        </div>
        {isWinners &&
        <div className="winners_container container">
          <div>
            <h3>מקום ראשון</h3>
            <span>
              {
                getPlayerByIdFromStore(
                  currentTournament.data.winners?.first?.playerId,
                  players
                )?.data.name
              }
            </span>
          </div>
          <div>
            <h3>מקום שני</h3>
            <span>
              {
                getPlayerByIdFromStore(
                  currentTournament.data.winners?.second?.playerId,
                  players
                )?.data.name
              }
            </span>
          </div>
          <div>
            <h3>מקום שלישי</h3>
            <span>
              {
                getPlayerByIdFromStore(
                  currentTournament.data.winners?.third?.playerId,
                  players
                )?.data.name
              }
            </span>
          </div>
        </div>
        }
      </div>
      }
    </div>
  );
}
