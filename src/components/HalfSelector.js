import { useState } from "react";
import StatsDisplay from "./StatsDisplay";

const HalfSelector = ({ lineups }) => {
  const [selectedHalf, setSelectedHalf] = useState("value");

  const handleSelectHalf = (e) => {
    setSelectedHalf(e.target.value);
  };

  return (
    <div className="half-selector">
      <button value="value" onClick={handleSelectHalf}>
        Full Time
      </button>
      <button value="fh" onClick={handleSelectHalf}>
        1st Half
      </button>
      <button value="sh" onClick={handleSelectHalf}>
        2nd Half
      </button>

      <div>
        <p>Home</p>
        <StatsDisplay stats={lineups.home.stats} half={selectedHalf} />
        <p>Away</p>
        <StatsDisplay stats={lineups.away.stats} half={selectedHalf} />
      </div>
    </div>
  );
};

export default HalfSelector;
