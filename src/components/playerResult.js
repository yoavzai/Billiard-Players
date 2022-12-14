
export default function PlayerResultComp(props) {

  const result = props.result;

  return (
    <div className="round_result_container">
      <div className={`result_container ${result.won ? "player_won" : "player_lost"}`}>
        <div className="player_result_row">
          <span>{result.player1Name}</span>
          <span>{result.player1Score}</span>
        </div>
        <div className="player_result_row">
          <span>{result.player2Name}</span>
          <span>{result.player2Score}</span>
        </div>
        {result.originalResult.isTechnical &&
        <div className="technical_result">
          <h3>טכני</h3>
        </div>
        }
        {!result.active &&
        <div className="inactive_result">
          <h3>לא מחושב</h3>
        </div>
        } 
      </div>
    </div>
  );
}
