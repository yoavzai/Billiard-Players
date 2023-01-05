import { useLocation } from "react-router-dom";
import TournamentsComp from "./tournaments";


export default function HomeComp() {
  const location = useLocation()
  return (
    <div>
      { location.state != null &&
        <div className="homepage_container">
          <TournamentsComp></TournamentsComp>
        </div>
      }
    </div>
  );
}
