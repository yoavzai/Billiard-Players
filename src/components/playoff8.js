import { useSelector } from "react-redux";
import Playoff8GameComp from "./playoff8Game";
import { getPlayerByIdFromStore } from "./utils";

export default function Playoff16Comp(props) {
  const currentTournament = useSelector((state) => state.currentTournament);
  const players = useSelector((state) => state.players);


  return (
    <div className="container playoff_container playoff8_container">
      <div className="buttons_container">
        <button
          className="button close_button"
          onClick={() => props.closePlayoff()}
        >
          סגור
        </button>
      </div>
      <div className="playoff_bracket playoff8_bracket">
        {currentTournament.data.playoff8
          .filter((g) => g.className !== "finals")
          .map((game, index) => {
            return (
              <Playoff8GameComp
                key={index}
                game={game}
                index={index}
              ></Playoff8GameComp>
            );
          })}
      </div>
      <div className="finals_container">
        <div className="final4_container">
          {currentTournament.data.playoff8
            .filter((g) => g.className === "finals")
            .map((game, index) => {
              return (
                <Playoff8GameComp
                  key={index}
                  game={game}
                  index={index}
                ></Playoff8GameComp>
              );
            })}
        </div>
        <div className="winners_container">
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
      </div>
    </div>
  );
}
