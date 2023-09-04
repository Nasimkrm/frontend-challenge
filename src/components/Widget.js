import { useState, useEffect } from "react";
import HalfSelector from "./HalfSelector";

const Widget = () => {
  const [match, setMatch] = useState(null);
  const [competitionName, setCompetitionName] = useState("");
  const [contestantOne, setContestantOne] = useState("");
  const [contestantTwo, setContestantTwo] = useState("");
  const [contestantOneScore, setContestantOneScore] = useState("");
  const [contestantTwoScore, setContestantTwoScore] = useState("");
  const [lineups, setLineups] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontend-tech-test-ashy.vercel.app/api/match"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        console.log(data);
        const { match } = data;
        setMatch(match);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!match) return;

    setContestantOne(match.contestant[0]);
    setContestantTwo(match.contestant[1]);

    const { scores } = match.liveData.matchDetails;

    setContestantOneScore(scores.ft.home);
    setContestantTwoScore(scores.ft.away);

    const { name } = match.meta.competition;
    setCompetitionName(name);

    setLineups(match.liveData.lineups);
  }, [match]);
  return (
    match && (
      <div>
        <h4>{competitionName}</h4>
        <h4>FT</h4>
        <div>
          {contestantOne && <h2>{contestantOne.name}</h2>}
          {contestantTwo && <h2>{contestantTwo.name}</h2>}
          {contestantOneScore && <h2>{contestantOneScore}</h2>}
          {contestantTwoScore && <h2>{contestantTwoScore}</h2>}
        </div>
        <div>
          <h4>Overview</h4>
          <h4>General</h4>
          <h4>ARS</h4>
          <h4>FUL</h4>
          <h4>Player</h4>
        </div>
        <div>
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
