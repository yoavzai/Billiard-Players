import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import companyLogo from "../lin-logo.png";

export default function TournamentsComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments);

  useEffect(() => {
    dispatch({
      type: "tournamentSelected",
      payload: {
        currentTournament: {},
        participants: [],
        rounds: [],
        currentRound: {},
        standings: [],
        allResults: [],
      },
    });
  }, []);

  async function tournamentsSelected(e) {
    navigate("/tournament/" + e.target.value);
  }

  return (
    <div className="tournaments_container">
      <div className="select_container">
        <div className="companylogo">
          <img src={companyLogo} alt="לינקולן לוגו" />
        </div>
        <label htmlFor="select-tournament"></label>
        <select
          name="select-tournament"
          onChange={tournamentsSelected}
          value="Select Tournament"
        >
          <option>בחר טורניר</option>
          {tournaments.map((tour) => {
            return (
              <option key={tour.id} value={tour.id}>
                {`${tour?.data?.startDate.month} ${
                  tour?.data?.startDate.year
                } ${tour?.data.isActive ? "(פעיל)" : "(הסתיים)"}`}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
