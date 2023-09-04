import { useState } from "react";
import StatsDisplay from "./StatsDisplay";

const HalfSelector = ({ lineups }) => {
  const [selectedHalf, setSelectedHalf] = useState("value");

  const handleSelectHalf = (e) => {
    setSelectedHalf(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-4 p-4">
        <button
          className={`w-24 border-2  rounded-full p-2 font-semibold ${
            selectedHalf === "value"
              ? "bg-yellow-300 text-black"
              : "border-black"
          }`}
          value="value"
          onClick={handleSelectHalf}
        >
          Full Time
        </button>
        <button
          className={`w-24 border-2  rounded-full p-2 font-semibold ${
            selectedHalf === "fh" ? "bg-yellow-300 text-black" : "border-black"
          }`}
          value="fh"
          onClick={handleSelectHalf}
        >
          1st Half
        </button>
        <button
          className={`w-24 border-2  rounded-full p-2 font-semibold ${
            selectedHalf === "sh" ? "bg-yellow-300 text-black" : "border-black"
          }`}
          value="sh"
          onClick={handleSelectHalf}
        >
          2nd Half
        </button>
      </div>
      <div className="flex items-center justify-center border-2">
        <StatsDisplay data={lineups} half={selectedHalf} />
      </div>
    </div>
  );
};

export default HalfSelector;
