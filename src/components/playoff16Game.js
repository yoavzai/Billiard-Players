import { useSelector } from "react-redux";
import { getPlayerByIdFromStore } from "./utils";

export default function Playoff16GameComp(props) {

  const players = useSelector((state) => state.players);
  const index = props.index;
  const game = props.game;

  return (
    <div id={"game"+index} key={index} className={`playoff_game_container ${game.className}`}>
      <h3>{`משחק ${game.game} ${(game.game === 27 || game.game === 28) ? '  -  חצי גמר' : game.game === 30 ? ' - גמר' : game.game === 29 ? ' - מקום 3' : ''}`}</h3>
      <div>
        <span>
          {getPlayerByIdFromStore(game?.player1?.playerId, players)?.data.name}
        </span>
        <span>{game.player1Score}</span>
        <span className="gh">{game.player1PrevGame}</span>
      </div>
      <div>
        <span>
          {getPlayerByIdFromStore(game?.player2?.playerId, players)?.data.name}
        </span>
        <span>{game.player2Score}</span>
        <span className="gh">{game.player2PrevGame}</span>
      </div>
    </div>
  );
}
