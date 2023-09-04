import { useState, useEffect } from "react";
import HalfSelector from "./HalfSelector";
import MatchDetails from "./MatchDetails";
import NavBar from "./NavBar";

const Widget = () => {
  const [matchData, setMatchData] = useState(null);
  const [lineups, setLineups] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://frontend-tech-test-ashy.vercel.app/api/match"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const { match } = await response.json();
      setMatchData(match);
      setLineups(match.liveData.lineups);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    matchData && (
      <div>
        <MatchDetails match={matchData} />
        <NavBar />
        <div className="flex items-center justify-center font-bold my-3">
          <h4>General</h4>
        </div>

        <div>
          {lineups ? <HalfSelector lineups={lineups} /> : <div>loading...</div>}
        </div>
      </div>
    )
  );
};

export default Widget;
